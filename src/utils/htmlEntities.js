export const htmlentities = {
  /**
   * Converts a string to its html characters completely.
   *
   * @param {String} str String with unescaped HTML characters
   * */
  encode(str) {
    const buf = [];

    for (let i = str.length - 1; i >= 0; i -= 1) {
      buf.unshift(['&#', str[i].charCodeAt(), ';'].join(''));
    }

    return buf.join('');
  },
  /**
   * Converts an html characterSet into its original character.
   *
   * @param {String} str htmlSet entities
   * */
  decode(str) {
    return str.replace(/&#(\d+);/g, (match, dec) => {
      return String.fromCharCode(dec);
    });
  },
};
