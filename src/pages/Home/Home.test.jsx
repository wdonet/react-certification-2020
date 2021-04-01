import React from 'react';
import { render, waitForElementToBeRemoved } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import YouTubeProvider from '../../providers/YouTubeAPI';
import HomePage from '.';

test('Video grid on initial render', async () => {
  const { getByText, getAllByRole } = render(
    <YouTubeProvider isMock>
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    </YouTubeProvider>
  );
  await waitForElementToBeRemoved(() => getByText('Loading!')).then();

  getAllByRole('link').forEach((value) => {
    expect(value).toBeInTheDocument();
  });
});
