export const buildChildUrl = (...names: string[]): string => names.join("/");

export const buildUrl = (url: string, ...names: string[]): string => {
  if (!names.length) return url;
  return `${url}/${buildChildUrl(...names)}`;
};

export const capitalize = (stringToCapitalize: string) =>
  stringToCapitalize.charAt(0).toUpperCase() + stringToCapitalize.slice(1);
