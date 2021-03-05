import React from 'react';
import { render, screen } from '@testing-library/react';

import Favorites from './Favorites.page';

describe('Favorites', () => {
  it('should renders', () => {
    const { container } = render(<Favorites />);

    expect(screen.getByText('Favorites')).toBeTruthy();

    expect(container).toMatchSnapshot();
  });
});
