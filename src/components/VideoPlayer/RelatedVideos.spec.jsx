import React from 'react';
import 'jest-styled-components';
import { fireEvent, getAllByTestId } from '@testing-library/dom';
import { render } from '@testing-library/react';
import { youtubeMockedData } from '../../utils';
import RelatedVideosList from './RelatedVideoList';

const build = (Component = <RelatedVideosList />) => {
  const { container } = render(Component);
  return { container };
};

describe('RelatedVideosList', () => {
  it('triggers video playback by ID', () => {
    const mockedPlayVideoByID = jest.fn();
    const { container } = build(
      <RelatedVideosList
        videos={youtubeMockedData.items.slice(0, 4)}
        playVideoByID={mockedPlayVideoByID}
      />
    );
    const videoList = getAllByTestId(container, (testID) =>
      testID.includes('small-caption-')
    );
    fireEvent.click(videoList[0].firstChild);
    expect(mockedPlayVideoByID).toHaveBeenCalledTimes(1);
  });
});
