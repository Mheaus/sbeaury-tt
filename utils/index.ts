import { URL } from "../types/enums";

export const buildChildUrl = (...names: string[]): string => names.join("/");

export const buildUrl = (baseUrl: URL, ...names: string[]): string =>
  `${baseUrl}/${buildChildUrl(...names)}`;
