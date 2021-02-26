import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import Home from './Home.page';

describe('Home page', () => {
  it('is contained in a section tag', () => {
    const element = renderer.create(<Home />).toJSON();
    expect(element.type).toBe('section');
  });

  it('shows an h1 title', () => {
    const { getByText } = render(<Home />);
    expect(getByText('Welcome to my challenge #1!').tagName).toBe('H1');
  });
});
