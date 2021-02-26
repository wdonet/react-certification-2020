import { formatDate, random } from './fns';

describe('Utils fns', () => {
  describe('Random', () => {
    it('Should return a random number under limit', () => {
      const limit = 10;
      expect(random(limit)).toBeLessThanOrEqual(limit);
    });
  });

  describe('Format Date', () => {
    it('Should return date from a full TimeDate String', () => {
      const dateString = '2019-09-30T23:54:32Z';
      expect(formatDate(dateString)).toEqual(`9/30/2019`);
    });
  });
});
