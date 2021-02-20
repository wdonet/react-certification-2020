import React from 'react';
import { render, screen } from '@testing-library/react';

import Navbar from './Navbar.component';

describe('Navbar', () => {
  it('renders Navbar component', () => {
    render(<Navbar />);
  });
});