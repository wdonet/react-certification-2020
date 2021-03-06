import React from 'react';
import { render } from '@testing-library/react';

import VideoCard from './VideoCard.component';


describe('VideoCard', () => {
  it('renders VideoCard component', () => {
    render(<VideoCard />);
  });
});