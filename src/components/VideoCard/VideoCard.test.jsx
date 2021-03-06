import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import VideoCard from '.';
import mockedData from '../../mockData/mockData.json';

describe('Video Card', () => {
  const { items } = mockedData;

  beforeEach(() => {
    render(
      <BrowserRouter>
        <VideoCard video={items[1]} />
      </BrowserRouter>
    );
  });

  it('renders provided properties', () => {
    const card = screen.getByTestId('card');
    expect(card.children.length).toEqual(2);
    expect(screen.getByText(items[1].snippet.title)).toBeTruthy();
    expect(screen.getByText(items[1].snippet.description)).toBeTruthy();
  });
});
