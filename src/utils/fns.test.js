import * as utils from 'utils/fns';

describe('Utils', () => {
  it('toggle changes true to false', () => {
    expect(utils.toggle(false)).toBe(true);
  });
  it('toggle changes false to true', () => {
    expect(utils.toggle(true)).toBe(false);
  });

  it('shortenCount shortens units', () => {
    expect(utils.shortenCount(1)).toBe('1');
    expect(utils.shortenCount(3)).toBe('3');
    expect(utils.shortenCount(7)).toBe('7');
    expect(utils.shortenCount(9)).toBe('9');
  });
  it('shortenCount shortens tens', () => {
    expect(utils.shortenCount(10)).toBe('10');
    expect(utils.shortenCount(30)).toBe('30');
    expect(utils.shortenCount(70)).toBe('70');
    expect(utils.shortenCount(99)).toBe('99');
  });
  it('shortenCount shortens hundreds', () => {
    expect(utils.shortenCount(100)).toBe('100');
    expect(utils.shortenCount(340)).toBe('340');
    expect(utils.shortenCount(700)).toBe('700');
    expect(utils.shortenCount(999)).toBe('1K');
  });
  it('shortenCount shortens thousands', () => {
    expect(utils.shortenCount(1001)).toBe('1K');
    expect(utils.shortenCount(3031)).toBe('3K');
    expect(utils.shortenCount(7999)).toBe('8K');
    expect(utils.shortenCount(9999)).toBe('10K');
  });
  it('shortenCount shortens millions', () => {
    expect(utils.shortenCount(1000001)).toBe('1M');
    expect(utils.shortenCount(2000011)).toBe('2M');
    expect(utils.shortenCount(3000111)).toBe('3M');
    expect(utils.shortenCount(4001111)).toBe('4M');
    expect(utils.shortenCount(5011111)).toBe('5M');
    expect(utils.shortenCount(6111111)).toBe('6.1M');
    expect(utils.shortenCount(6811111)).toBe('6.8M');
    expect(utils.shortenCount(9099990)).toBe('9.1M');
    expect(utils.shortenCount(9999999)).toBe('10M');
  });
  it('shortenCount shortens billions', () => {
    expect(utils.shortenCount(1000000001)).toBe('1B');
    expect(utils.shortenCount(2000000011)).toBe('2B');
    expect(utils.shortenCount(3000000111)).toBe('3B');
    expect(utils.shortenCount(4000001111)).toBe('4B');
    expect(utils.shortenCount(5000011111)).toBe('5B');
    expect(utils.shortenCount(6000111111)).toBe('6B');
    expect(utils.shortenCount(7001111111)).toBe('7B');
    expect(utils.shortenCount(8011111111)).toBe('8B');
    expect(utils.shortenCount(9111111111)).toBe('9.1B');
    expect(utils.shortenCount(9099999990)).toBe('9.1B');
    expect(utils.shortenCount(9999999990)).toBe('10B');
  });
});
