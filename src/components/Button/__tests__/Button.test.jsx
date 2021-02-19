import React from 'react';
import { render } from '@testing-library/react';
import Button from '../Button.component';

describe('Test Button component', () => {
  it('expect to render correctly', () => {
    const { getByText } = render(<Button label="button" />);

    expect(getByText('button').tagName).toBe('BUTTON');
  });
});
