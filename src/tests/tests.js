import { renderHook, act } from '@testing-library/react-hooks';

import useCounter from '../hooks/useCounter';

describe('useCounter', () => {
  it('sets initial state to desired value', () => {
    const { result } = renderHook(() => useCounter(123));

    expect(result.current.counter).toBe(123);
  });

  it('sets default counter if not init state is provided', () => {
    const { result } = renderHook(() => useCounter());

    expect(result.current.counter).toBe(0);
  });

  it('increments the value of the counter state', () => {
    const { result } = renderHook(() => useCounter(123));

    // Triggering updates should be wrapped inside the `act` function
    act(() => {
      result.current.increment();
    });

    expect(result.current.counter).toBe(124);
  });

  it('increments the value of the counter asynchronously', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useCounter(123));

    result.current.incrementAsync();

    await waitForNextUpdate();

    expect(result.current.counter).toBe(124);
  });

  it('does not play well with destructuring current value', () => {
    const { result } = renderHook(() => useCounter(123));
    const { counter, increment } = result.current;

    act(() => increment());

    // But, counter is a primitive (a number), so it was copied by value
    // That's why its value is still `123`
    expect(counter).toBe(123);

    // However, increment is a function so it was copied by reference
    // That's why the mutation worked and accessing the new counter
    // ussing the `.current` prop works as expected
    expect(result.current.counter).toBe(124);
  });
});
