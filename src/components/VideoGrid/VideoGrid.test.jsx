import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoGrid from '.';
import mockedData from '../../mockData/mockData.json';

describe('Video Grid', () => {
  const { items } = mockedData;

  beforeEach(() => {
    render(<VideoGrid videos={items} />);
  });

  it('renders all items', () => {
    const grid = screen.getByTestId('grid');
    expect(grid.children.length).toEqual(1);
    const row = screen.getByTestId('row');
    expect(row.children.length).toEqual(24);
  });
});
