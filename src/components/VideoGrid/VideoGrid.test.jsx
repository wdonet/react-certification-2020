import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import VideoGrid from '.';
import mockedData from '../../mockData/mockData.json';

describe('Video Grid', () => {
  const { items } = mockedData;

  beforeEach(() => {
    render(
      <BrowserRouter>
        <VideoGrid videos={items} />
      </BrowserRouter>
    );
  });

  it('renders all items', () => {
    const grid = screen.getByTestId('grid');
    expect(grid.children.length).toEqual(1);
    const row = screen.getByTestId('row');
    expect(row.children.length).toEqual(24);
  });
});
