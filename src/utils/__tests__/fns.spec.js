import { random } from '../fns';

const limit = 10;

describe('random function', () => {
  it('returns a number', () => {
    const randomNum = random(limit);

    expect(typeof randomNum).toBe('number');
  });

  it('respects the limit', () => {
    const randomNum = random(limit);

    expect(randomNum).toBeLessThan(limit);
  });
});
