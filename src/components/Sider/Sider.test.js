import 'mockData/matchMedia.mock';
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthProvider from 'providers/Auth';
import Sider from 'components/Sider';

describe('Sider', () => {
  it('is collapsed by default', () => {
    const { getByRole } = render(
      <AuthProvider>
        <Router>
          <Sider isHidden />
        </Router>
      </AuthProvider>
    );
    expect(getByRole('complementary').classList.toString()).toMatch('collapsed');
  });

  it('has a Home menu item', () => {
    const { getByText } = render(
      <AuthProvider>
        <Router>
          <Sider />
        </Router>
      </AuthProvider>
    );
    expect(getByText('Home')).not.toBeUndefined();
  });

  it('is collapsed after clicking the close button', () => {
    const { getByRole } = render(
      <AuthProvider>
        <Router>
          <Sider isHidden={false} />
        </Router>
      </AuthProvider>
    );

    const closeButton = getByRole('button');
    closeButton.click();

    expect(getByRole('complementary').classList.toString()).not.toMatch('collapsed');
  });

  it('goes to home after clicking home item', () => {
    const { getByText } = render(
      <AuthProvider>
        <Router>
          <Sider />
        </Router>
      </AuthProvider>
    );

    const homeItem = getByText('Home');
    homeItem.click();
  });
});
