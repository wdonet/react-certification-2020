import React from 'react';
import { render } from '@testing-library/react';
import App from './App.component';

describe('<App />', () => {
  test('Renders correctly', () => {
    const { container } = render(<App />);
    expect(container).not.toBe(null);
  });
});
