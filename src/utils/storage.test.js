import { storage } from './storage';

describe('Utils Storage', () => {
  it('Should return a value after set some key', () => {
    storage.set('foo', 'bar');
    expect(storage.get('foo')).toBe('bar');
  });

  it('Should return null if an error is catched', () => {
    jest.spyOn(JSON, 'parse').mockImplementation(() => {
      throw new Error('Custom error');
    });

    expect(storage.get()).toBe(null);
  });
});
