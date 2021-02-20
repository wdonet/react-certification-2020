import React from 'react';
import { render, screen } from '@testing-library/react';

import VideoCard from './VideoCard.component';
import mockedData from '../../youtube-videos-mock.json';


describe('VideoCard', () => {
  it('renders VideoCard component', () => {
    render(<VideoCard />);
  });
});