import 'mockData/matchMedia.mock';
import React from 'react';
import { render } from '@testing-library/react';
import App from 'components/App';

describe('App', () => {
  it('renders the header', () => {
    const { getByRole } = render(<App />);
    expect(getByRole('banner')).not.toBeUndefined();
  });
  it('renders the side menu', () => {
    const { getByRole } = render(<App />);
    expect(getByRole('menuitem').textContent).toBe('Home');
  });
  it('renders the content section', () => {
    const { getByRole } = render(<App />);
    expect(getByRole('main')).not.toBeUndefined();
  });
});
