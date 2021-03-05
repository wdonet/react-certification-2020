import { renderHook, act } from '@testing-library/react-hooks';

import { useYoutubeSearch } from '..';

describe('useYoutubeSearch', () => {
  it('sets loading while fetching', async () => {
    const { result, waitForNextUpdate } = renderHook(useYoutubeSearch);

    expect(result.current.loading).toBeFalsy();

    await act(async () => {
      result.current.search('');

      await waitForNextUpdate();
    });

    expect(result.current.loading).toBeTruthy();
  });

  it('should throw an error message', async () => {
    const { result, waitForNextUpdate } = renderHook(useYoutubeSearch);

    console.error = jest.fn();

    await act(async () => {
      result.current.search('');

      await Promise.all([...Array(2)].map(() => waitForNextUpdate()));
    });

    expect(console.error).toHaveBeenCalled();
  });
});
