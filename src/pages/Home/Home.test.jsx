import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import HomePage from '.';
import mockedData from '../../mockData/mockData.json';

const { items } = mockedData;

describe('Home Page', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <HomePage videos={items} />
      </BrowserRouter>
    );
  });

  it('renders Videos grid', () => {
    expect(screen.getByTestId('grid')).toBeInTheDocument();
  });
});
