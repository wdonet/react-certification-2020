import { renderHook, act } from '@testing-library/react-hooks';
import useSearchAPI from './useSearchAPI';
import { googleMockedAPIObject, youtubeMockedData } from '../utils';

describe('useSearchAPI', () => {
  it("fetches videos list when calling 'search'", async () => {
    global.gapi = googleMockedAPIObject();
    const hook = renderHook(() => useSearchAPI());
    expect(hook.result.current.videos).toHaveLength(0);

    await act(async () => {
      hook.result.current.search('');
    });

    expect(hook.result.current.videos).toHaveLength(youtubeMockedData.items.length);
  });

  it('returns empty array when call fails', async () => {
    global.gapi = googleMockedAPIObject(false);
    const hook = renderHook(() => useSearchAPI());
    expect(hook.result.current.videos).toHaveLength(0);

    await act(async () => {
      hook.result.current.search('');
    });

    expect(hook.result.current.videos).toHaveLength(0);
  });
});
