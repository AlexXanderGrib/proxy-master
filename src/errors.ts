import { ProxyInfo } from "./parser";

/**
 *
 *
 * @export
 * @class ProxyParsingError
 * @extends {Error}
 */
export class ProxyParsingError extends Error {
  override name = "ProxyParsingError";

  /**
   * Creates an instance of ProxyParsingError.
   * @param {string} line
   * @memberof ProxyParsingError
   */
  constructor(line: string) {
    super(`Invalid proxy format: ${line}`);
  }
}

/**
 *
 *
 * @export
 * @class ProxyTypeRequiredError
 * @extends {Error}
 */
export class ProxyTypeRequiredError extends Error {
  override name = "ProxyTypeRequiredError";

  /**
   * Creates an instance of ProxyTypeRequiredError.
   * @param {ProxyInfo} info
   * @memberof ProxyTypeRequiredError
   */
  constructor(info: ProxyInfo) {
    super(`Proxy info should contain proxy type: ${JSON.stringify(info)}`);
  }
}