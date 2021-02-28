import { storage } from './storage';

beforeEach(() => {
  window.localStorage.clear();
});

test('Store and change a value', () => {
  const key = 'key';
  const value = 'value';
  const newValue = 'newValue';
  expect(storage.get(key)).toBe(null);
  storage.set(key, value);
  expect(storage.get(key)).toBe(value);
  storage.set(key, newValue);
  expect(storage.get(key)).toBe(newValue);
});
