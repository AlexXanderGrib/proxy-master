import { readFile } from "fs/promises";
import { ProxyInfo } from "../parser";
import type { PathLike } from "fs";
import axios from "axios";
import { getAgents } from "../agent";
import { CustomFetcher, CustomFetcherOptions } from "./custom";

export type FileFetcherOptions = Omit<CustomFetcherOptions, "fetch"> & {
  path: PathLike;
  proxy?: ProxyInfo;
  fileEncoding?: BufferEncoding;
};

export type FileInfo = {
  line: string;
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
export class FileFetcher extends CustomFetcher<FileInfo> {
  /**
   * Creates an instance of FileFetcher.
   * @param {FileFetcherOptions} options
   * @memberof FileFetcher
   */
  constructor(public readonly options: FileFetcherOptions) {
    super(async () => {
      const content = await this._getFile();
      const lines = content.split("\n");

      return lines
        .filter((line) => line && !line.startsWith("#"))
        .map((line) => [line, { line }]);
    }, options);
  }

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
}
