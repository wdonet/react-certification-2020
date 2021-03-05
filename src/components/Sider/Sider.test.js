import 'mockData/matchMedia.mock';
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sider from 'components/Sider';

describe('Sider', () => {
  it('is collapsed by default', () => {
    const { getByRole } = render(
      <Router>
        <Sider isHidden />
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

  it('is collapsed after clicking the close button', () => {
    const { getByRole } = render(
      <Router>
        <Sider isHidden={false} />
      </Router>
    );

    const closeButton = getByRole('button');
    closeButton.click();

    expect(getByRole('complementary').classList.toString()).not.toMatch('collapsed');
  });
});
