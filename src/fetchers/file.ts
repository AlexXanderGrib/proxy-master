import { readFile } from "fs/promises";
import { ProxyFetcher } from "../fetcher";
import { ProxyType, TypedProxyInfo, parseRequireType } from "../parser";
import { check } from "../checker";
import type { PathLike } from "fs";
import EventEmitter from "eventemitter3";
import { ProxyParsingError } from "../errors";

export type FileFetcherOptions = {
  path: PathLike;
  autoCheck?: boolean;

  checkUrl?: string;
  checkTimeout?: number;
  defaultProxyType?: ProxyType;
};

export type FileInfo = {
  line: string;
  lineIndex: number;
};

export type FileFetcherEvents = {
  "checked:valid": (proxy: TypedProxyInfo, file: FileInfo) => void;
  "checked:failed": (line: string, error: unknown) => void;
};

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
  private readonly _valid = new Map<string, TypedProxyInfo>();

  /**
   *
   *
   * @protected
   * @return {Promise<Map<TypedProxyInfo, FileInfo>>}  {Promise<Map<TypedProxyInfo, FileInfo>>}
   * @memberof FileFetcher
   */
  protected async _fetch(): Promise<Map<TypedProxyInfo, FileInfo>> {
    const content = await readFile(this.options.path, "ascii").catch(() => "");
    const map = new Map<TypedProxyInfo, FileInfo>();

    let lineIndex = 0;

    for (let line of content.split("\n")) {
      line = line.trim();

      if (!line || this._invalid.has(line)) {
        continue;
      }

      try {
        lineIndex++;
        let proxy = parseRequireType(line, this.options.defaultProxyType);
        const info: FileInfo = { line, lineIndex };

        const cachedValid = this._valid.get(line);
        if (cachedValid) {
          map.set(cachedValid, info);
          continue;
        }

        if (this.options.autoCheck ?? true) {
          proxy = await check(proxy, {
            url: this.options.checkUrl,
            timeout: this.options.checkTimeout
          });

          this._valid.set(line, proxy);
          this.events.emit("checked:valid", proxy, info);
        }

        map.set(proxy, info);
      } catch (error) {
        if (error instanceof ProxyParsingError) {
          this._invalid.add(line);
        }

        this.events.emit("checked:failed", line, error);
        continue;
      }
    }

    return map;
  }
}
