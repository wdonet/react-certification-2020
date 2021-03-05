import { renderHook } from '@testing-library/react-hooks';
import useCallAPI from '../utils/hooks/useCallApi.js';

describe('useCallApi', () => {
  it('verifies that it renders with no initial value', () => {
    const { result } = renderHook(() => useCallAPI(null));
    expect(result.current).toBe(null);
  });

  it('verifies that useCallAPI is defined ', () => {
    const { result } = renderHook(() => useCallAPI());
    expect(result.current).toBeDefined();
  });

  it('should not throw an error', () => {
    renderHook(() => useCallAPI());
  });

  //   it('try to call the hook useCallAPI', () => {
  //     const { result } = renderHook(() => useCallAPI());
  //     expect(result.current).toBeFalsy();
  //     act(() => {
  //         result.current
  //     })
  //     expect(result.current).toBeFalsy();
  // });
});
