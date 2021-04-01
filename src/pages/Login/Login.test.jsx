import React from 'react';
import { render } from '@testing-library/react';
import Login from '.';
import AuthProvider from '../../providers/Auth';

test('Renders login form', async () => {
  const { container } = render(
    <AuthProvider>
      <Login />
    </AuthProvider>
  );

  const login = document.getElementsByClassName('login')[0];
  expect(container.children).toContain(login);
});
