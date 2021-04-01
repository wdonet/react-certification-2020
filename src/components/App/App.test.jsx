import React from 'react';
import { render, waitForElementToBeRemoved } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import YouTubeProvider from '../../providers/YouTubeAPI';
import App from '.';

function renderApp() {
  return render(
    <YouTubeProvider isMock>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </YouTubeProvider>
  );
}

test('Loding on start', () => {
  const { getByText } = renderApp();

  expect(getByText('Loading!')).toBeInTheDocument();
});

test('Header renders on all screens', async () => {
  const { getByText, getByRole } = renderApp();
  await waitForElementToBeRemoved(() => getByText('Loading!')).then();

  expect(getByRole('banner')).toBeInTheDocument();
});
