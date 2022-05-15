export const buildApiChildUrl = (...names: string[]): string => names.join("/");

export const buildApiUrl = (url: string, ...names: string[]): string => {
  if (!names.length) return url;
  return `${url}/${buildApiChildUrl(...names)}`;
};

export const capitalize = (stringToCapitalize: string) =>
  stringToCapitalize.charAt(0).toUpperCase() + stringToCapitalize.slice(1);
