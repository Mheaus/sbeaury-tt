export const buildChildUrl = (...names: string[]): string => names.join("/");

export const buildUrl = (url: string, ...names: string[]): string => {
  if (!names.length) return url;
  return `${url}/${buildChildUrl(...names)}`;
};
