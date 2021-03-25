import React from 'react';
import { render, screen } from '@testing-library/react';
import { createHashHistory } from 'history';

import App from '..';

describe('<App />', () => {
  it('rendering and navigating to not found page', () => {
    const history = createHashHistory({ initialEntries: ['/'] });
    history.push('/not-found');

    render(<App />);

    expect(screen.getByAltText(/page not found/i)).toBeInTheDocument();
  });
});
