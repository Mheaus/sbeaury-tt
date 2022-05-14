export const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

export const buildChildUrl = (...names: string[]): string => names.join("/");

export const buildUrl = (...names: string[]): string =>
  `${BASE_URL}/${buildChildUrl(...names)}`;
