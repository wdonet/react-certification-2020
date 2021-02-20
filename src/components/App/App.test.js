import React from 'react';
import { render } from '@testing-library/react';
import App from './App.component';

describe('App', () => {
  it('renders Main Container', () => {
    const { getByRole } = render(<App />);
    expect(getByRole('main')).not.toBeUndefined();
  });
  it('renders Navigation Bar', () => {
    const { getByRole } = render(<App />);
    expect(getByRole('banner')).not.toBeUndefined();
  });
});