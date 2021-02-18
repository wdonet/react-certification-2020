import 'mockData/matchMedia.mock';
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from 'components/Header';

describe('Header', () => {
  it('renders sider menu and login icons', () => {
    const { getAllByRole } = render(
      <Router>
        <Header />
      </Router>
    );
    expect(getAllByRole('img')[0]).toHaveAttribute('name', 'sider-menu');
    expect(getAllByRole('img')[2]).toHaveAttribute('name', 'login');
  });

  it('renders a search bar', () => {
    const { getAllByRole } = render(
      <Router>
        <Header />
      </Router>
    );
    expect(getAllByRole('textbox').length).toBe(1);
  });

  it('has a link to the login page', () => {
    const { getByRole } = render(
      <Router>
        <Header />
      </Router>
    );
    expect(getByRole('link')).toHaveAttribute('href', '/login');
  });
});
