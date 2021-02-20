import React from 'react';
import { render, screen } from '@testing-library/react';

import VideosCatalog from './VideosCatalog.component';

describe('VideosCatalog', () => {
  it('renders VideosCatalog component', () => {
    render(<VideosCatalog />);
  });
});