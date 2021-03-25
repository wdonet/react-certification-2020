import React from 'react';
import { render, screen } from '@testing-library/react';

import Home from '..';
import CustomProvider from '../../../providers/Custom';

jest.mock('react-router-dom', () => ({
  useLocation: jest.fn().mockReturnValue({ pathname: '/' }),
  useHistory: jest.fn().mockReturnValue({ push: (f) => f }),
}));

const WrappedHome = () => (
  <CustomProvider>
    <Home />
  </CustomProvider>
);

describe('<Home />', () => {
  it('renders welcome title', () => {
    render(<WrappedHome />);

    expect(screen.getByText(/welcome to the challenge/i)).toBeInTheDocument();
  });
});
