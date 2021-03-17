import 'mockData/matchMedia.mock';
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import App from 'components/App';
import AppContext from 'context/AppContext';
import { getVideos } from 'utils/api';
import { VIDEOS } from 'mockData/youtube-videos-mock';

const MOCK_RESPONSE = { result: VIDEOS };

jest.mock('utils/hooks/useVideos');
jest.mock('utils/api');

describe('App', () => {
  it('renders the header', async () => {
    getVideos.mockResolvedValue(MOCK_RESPONSE);

    const { getByRole } = render(
      <AppContext>
        <App />
      </AppContext>
    );
    await waitFor(() => expect(getByRole('banner')).not.toBeUndefined());
  });

  it('renders the side menu', async () => {
    getVideos.mockResolvedValue(MOCK_RESPONSE);
    const { getByRole } = render(
      <AppContext>
        <App />
      </AppContext>
    );
    await waitFor(() => expect(getByRole('menuitem').textContent).toBe('Home'));
  });

  it('renders the content section', async () => {
    getVideos.mockResolvedValue(MOCK_RESPONSE);
    const { getByRole } = render(
      <AppContext>
        <App />
      </AppContext>
    );
    await waitFor(() => expect(getByRole('main')).not.toBeUndefined());
  });
  it('triggers the Sider collapse when clicking on the Header menu icon', async () => {
    getVideos.mockResolvedValue(MOCK_RESPONSE);
    const { getByLabelText } = render(
      <AppContext>
        <App />
      </AppContext>
    );
    const siderMenuIcon = getByLabelText('sider-menu-icon');
    const sider = getByLabelText('sider');

    await waitFor(() => expect(sider.classList.toString()).toMatch('collapsed'));

    fireEvent.click(siderMenuIcon);

    await waitFor(() => expect(sider.classList.toString()).not.toMatch('collapsed'));
  });
});
