import React from 'react';
import { render } from '@testing-library/react';
import MoonIcon from './Moon.icon';

describe('Moon icon', () => {
  it('is contained within an svg tag', () => {
    const { container } = render(<MoonIcon />);

    const containingElement = container.firstChild.tagName;

    expect(containingElement).toBe('svg');
  });

  it('has a default size of 20px', () => {
    const defaultSize = '20px';
    const { container } = render(<MoonIcon />);

    const width = container.querySelector('svg').getAttribute('width');
    const height = container.querySelector('svg').getAttribute('height');

    expect(width).toBe(defaultSize);
    expect(height).toBe(defaultSize);
  });

  it('has the correct paths', () => {
    const { container } = render(<MoonIcon />);

    const elements = container.querySelectorAll('path');

    expect(elements[0].getAttribute('d')).toBe('M0,0h24v24H0V0z');
    expect(elements[1].getAttribute('d')).toBe(
      'M9.5,2c-1.82,0-3.53,0.5-5,1.35c2.99,1.73,5,4.95,5,8.65s-2.01,6.92-5,8.65C5.97,21.5,7.68,22,9.5,22c5.52,0,10-4.48,10-10 S15.02,2,9.5,2z'
    );
  });
});
