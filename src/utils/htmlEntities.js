export const htmlentities = {
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
