import React from 'react';
import { render, screen } from '@testing-library/react';

import Home from '..';

describe('<Home />', () => {
  it('renders welcome title', () => {
    render(<Home />);

    expect(screen.getByText(/welcome to the challenge/i)).toBeInTheDocument();
  });
});
