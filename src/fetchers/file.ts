import { readFile } from "fs/promises";
import { type ProxyInfo } from "../parser";
import type { PathLike } from "fs";
import axios from "axios";
import { getAgents } from "../agent";
import { CustomFetcher, type CustomFetcherOptions } from "./custom";
import { parallelMap } from "../parallel";

export type FileFetcherOptions = Omit<CustomFetcherOptions, "fetch"> & {
  path: PathLike | PathLike[];
  proxy?: ProxyInfo;
  fileEncoding?: BufferEncoding;
  allowAllErrorsList?: boolean;
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
      const paths = Array.isArray(this.options.path)
        ? this.options.path
        : [this.options.path];
      const results = await parallelMap(paths, this._getFile.bind(this));

      const contents = results
        .filter(
          (r): r is PromiseFulfilledResult<string> => r.status === "fulfilled"
        )
        .map((r) => r.value);
      const errors = results
        .filter((r): r is PromiseRejectedResult => r.status === "rejected")
        .map((r) => r.reason);

      if (contents.length === 0 && !options.allowAllErrorsList) {
        throw new AggregateError(errors, "No contents fetched");
      }

      for (const error of errors) {
        this.events.emit("fetch:failed", error);
      }

      const lines = [...new Set(contents.join("\n\n").split("\n"))].filter(
        (line) => line && !line.startsWith("#")
      );

      return lines.map((line) => [line, { line }]);
    }, options);
  }

  /**
   *
   * @param {PathLike} path
   * @private
   * @return {promise<string>}  {Promise<string>}
   * @memberof FileFetcher
   */
  private async _getFile(path: PathLike): Promise<string> {
    if (isWeb(path)) {
      const proxyOptions = this.options.proxy
        ? getAgents(this.options.proxy)
        : {};

      const { data } = await axios.get(String(path), {
        ...proxyOptions,
        responseType: "text"
      });

      return data;
    } else {
      return await readFile(path, this.options.fileEncoding ?? "utf8");
    }
  }
}
