import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import Login from '../Login.page';
import { useAuth } from '../../../providers/Auth';

jest.mock('../../../providers/Auth');

describe('Test Login component', () => {
  useAuth.mockReturnValue({
    login: jest.fn(),
  });

  it('expect to render correctly', () => {
    const { getByRole, getByText } = render(<Login />);

    expect(getByRole('textbox').id).toBe('username');
    expect(getByText('login').tagName).toBe('BUTTON');
  });

  it('expect to execute login', () => {
    const history = createMemoryHistory();
    const { login } = useAuth();
    const { getByText } = render(
      <Router history={history}>
        <Login />
      </Router>
    );
    fireEvent.click(getByText('login'));
    expect(login).toHaveBeenCalledTimes(1);
  });
});
