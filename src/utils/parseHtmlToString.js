export const parseHtmlToString = (string) => {
  const parser = new DOMParser();
  return parser.parseFromString(string, 'text/html').body.innerHTML;
};
