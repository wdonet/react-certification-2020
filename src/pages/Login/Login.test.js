import 'mockData/matchMedia.mock';
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from 'pages/Login';
import { getVideos } from 'utils/api';
import { VIDEOS } from 'mockData/youtube-videos-mock';
import AuthProvider from '../../providers/Auth';

const MOCK_RESPONSE = { result: VIDEOS };

jest.mock('utils/hooks/useVideos');
jest.mock('utils/api');

describe('Login', () => {
  it('renders username and password fields', () => {
    getVideos.mockResolvedValue(MOCK_RESPONSE);
    const { getByLabelText } = render(
      <AuthProvider>
        <Router>
          <Login />
        </Router>
      </AuthProvider>
    );

    expect(getByLabelText('input-username')).not.toBeUndefined();
    expect(getByLabelText('input-password')).not.toBeUndefined();
  });

  it('redirects to /home when the login is successful', () => {
    expect(false).toBeTruthy();
  });

  it('shows an error message when the login is unsuccessful', () => {
    expect(false).toBeTruthy();
  });
});
