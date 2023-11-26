import "dotenv/config";
import { AnyProxyInfo, parse, parseRequireType } from "../parser";

export const validHttp = parseRequireType(
  process.env.VALID_HTTP_PROXY!,
  "http"
);
export const validSocks = parseRequireType(
  process.env.VALID_SOCKS_PROXY!,
  "socks5"
);

const validUnknownSocks = parse(process.env.VALID_SOCKS_PROXY!);
delete validUnknownSocks.type;
export { validUnknownSocks };

export const invalid: AnyProxyInfo = { host: "undefined", port: 3 };
