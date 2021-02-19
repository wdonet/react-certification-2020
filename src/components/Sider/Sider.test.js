import 'mockData/matchMedia.mock';
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sider from 'components/Sider';

describe('Sider', () => {
  it('is collapsed by default', () => {
    const { getByRole } = render(
      <Router>
        <Sider />
      </Router>
    );
    expect(getByRole('complementary').classList.toString()).toMatch('collapsed');
  });

  it('has a Home menu item', () => {
    const { getByText } = render(
      <Router>
        <Sider />
      </Router>
    );
    expect(getByText('Home')).not.toBeUndefined();
  });
});
