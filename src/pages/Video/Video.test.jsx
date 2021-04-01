import React from 'react';
import { render, waitForElementToBeRemoved } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import YouTubeProvider from '../../providers/YouTubeAPI';
import Video from '.';

const testId = 'JhUqf_fhgeA';

function renderVideo() {
  return render(
    <YouTubeProvider isMock>
      <MemoryRouter initialEntries={[`/video/${testId}`]}>
        <Video />
      </MemoryRouter>
    </YouTubeProvider>
  );
}

describe("Renders all of it's parts", () => {
  test('Display video player', async () => {
    const { getByText, getByRole } = renderVideo();
    await waitForElementToBeRemoved(() => getByText('Loading!')).then();
    expect(getByRole('heading', { name: 'title' })).toBeInTheDocument();
    expect(getByRole('region', { name: 'description' })).toBeInTheDocument();
  });

  test('Display video details', async () => {
    const { getByText, getByRole } = renderVideo();
    await waitForElementToBeRemoved(() => getByText('Loading!')).then();
    expect(getByRole('heading', { name: 'title' })).toBeInTheDocument();
    expect(getByRole('region', { name: 'description' })).toBeInTheDocument();
  });

  test('Display related videos', async () => {
    const { getByText, getAllByRole, getByRole } = renderVideo();
    await waitForElementToBeRemoved(() => getByText('Loading!')).then();

    const title = getByRole('heading', { name: 'title' });
    getAllByRole('heading').forEach((value) => {
      if (value !== title) {
        expect(value).toBeInTheDocument();
      }
    });
  });
});
