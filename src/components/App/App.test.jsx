import React from 'react';
import { act, render, screen } from '@testing-library/react';
import axios from 'axios';
import App from './App.component';
import searchResult from '../../mock/youtube-videos-mock.json';

jest.mock('axios');

describe('Main App Component', () => {
  beforeEach(() => {
    const response = { data: searchResult };
    axios.get.mockResolvedValue(response);
  });

  afterEach(() => {
    jest.clearAllMocks();
    axios.mockRestore();
  });

  it('should render welcome message', async () => {
    await act(async () => {
      render(<App />);
    });

    expect(screen.queryByTestId('header')).toBeInTheDocument();
    expect(screen.queryByTestId('menu')).toBeInTheDocument();
    expect(screen.queryByTestId('main-content')).toBeInTheDocument();
    expect(screen.getByText('Hello stranger!')).toBeInTheDocument();
  });

  it('should render welcome message when matchMedia matches with dark mode', async () => {
    window.matchMedia = () => ({
      matches: true,
    });
    jest.spyOn(window, 'matchMedia');

    await act(async () => {
      render(<App />);
    });

    expect(screen.queryByTestId('header')).toBeInTheDocument();
    expect(screen.queryByTestId('menu')).toBeInTheDocument();
    expect(screen.queryByTestId('main-content')).toBeInTheDocument();
    expect(screen.getByText('Hello stranger!')).toBeInTheDocument();
  });
});
