import { readFile } from "fs/promises";
import { ProxyFetcher } from "../fetcher";
import { ProxyType, ProxyInfo, parseRequireType, parse } from "../parser";
import { check } from "../checker";
import type { PathLike } from "fs";
import EventEmitter from "eventemitter3";
import { ProxyParsingError } from "../errors";
import { ParallelMapOptions, parallelMap } from "../parallel";
import axios from "axios";
import { getAgents } from "../agent";

export type FileFetcherOptions = {
  path: PathLike;

  proxy?: ProxyInfo;
  check?: boolean;

  checkUrl?: string;
  checkTimeout?: number;
  defaultProxyType?: ProxyType;

  fileEncoding?: BufferEncoding;
} & ParallelMapOptions;

export type FileInfo = {
  line: string;
};

export type FileFetcherEvents = {
  "checked:valid": (proxy: ProxyInfo, file: FileInfo) => void;
  "checked:failed": (line: string, error: unknown) => void;
  "fetch:failed": (path: string, error: unknown) => void;
};

/**
 *
 *
 * @param {PathLike} path
 * @return {boolean}
 */
function isWeb(path: PathLike): boolean {
  if (path instanceof URL) {
    return path.protocol === "http:" || path.protocol === "https:";
  }

  if (typeof path === "string") {
    try {
      return isWeb(new URL(path));
    } catch {
      return false;
    }
  }

  return false;
}

/**
 *
 *
 * @export
 * @class FileFetcher
 * @extends {ProxyFetcher<FileInfo>}
 */
export class FileFetcher extends ProxyFetcher<FileInfo> {
  private readonly _events = new EventEmitter<FileFetcherEvents>();

  /**
   *
   *
   * @readonly
   * @type {EventEmitter<FileFetcherEvents>}
   * @memberof FileFetcher
   */
  get events(): EventEmitter<FileFetcherEvents> {
    return this._events;
  }

  /**
   * Creates an instance of FileFetcher.
   * @param {FileFetcherOptions} options
   * @memberof FileFetcher
   */
  constructor(public readonly options: FileFetcherOptions) {
    super();
  }

  private readonly _invalid = new Set<string>();
  private readonly _valid = new Map<string, ProxyInfo>();

  /**
   *
   *
   * @private
   * @return {promise<string>}  {Promise<string>}
   * @memberof FileFetcher
   */
  private async _getFile(): Promise<string> {
    if (isWeb(this.options.path)) {
      const proxyOptions = this.options.proxy
        ? getAgents(this.options.proxy)
        : {};

      const { data } = await axios.get(String(this.options.path), {
        ...proxyOptions,
        responseType: "text"
      });

      return data;
    } else {
      return await readFile(
        this.options.path,
        this.options.fileEncoding ?? "utf8"
      );
    }
  }

  /**
   *
   *
   * @protected
   * @return {Promise<Map<ProxyInfo, FileInfo>>}  {Promise<Map<ProxyInfo, FileInfo>>}
   * @memberof FileFetcher
   */
  protected async _fetch(): Promise<Map<ProxyInfo, FileInfo>> {
    const content = await this._getFile().catch((error): string => {
      this.events.emit("fetch:failed", String(this.options.path), error);
      return "";
    });

    const map = new Map<ProxyInfo, FileInfo>();

    await parallelMap(
      content.split("\n"),
      async (line) => {
        line = line.trim();

        if (!line || this._invalid.has(line)) {
          return;
        }

        const autoCheck = this.options.check ?? true;
        const info: FileInfo = { line };
        const cachedValid = this._valid.get(line);
        if (cachedValid) {
          map.set(cachedValid, info);
          return;
        }

        try {
          let proxy: ProxyInfo;

          if (autoCheck) {
            proxy = await check(parse(line), {
              url: this.options.checkUrl,
              timeout: this.options.checkTimeout
            });

            this._valid.set(line, proxy);
            this.events.emit("checked:valid", proxy, info);
          } else {
            proxy = parseRequireType(line, this.options.defaultProxyType);
          }

          map.set(proxy, info);
        } catch (error) {
          if (error instanceof ProxyParsingError) {
            this._invalid.add(line);
          }

          this.events.emit("checked:failed", line, error);
          return;
        }
      },
      { parallel: this.options.parallel }
    );

    return map;
  }
}
