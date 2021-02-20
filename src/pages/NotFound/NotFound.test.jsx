import React from 'react';
import { render } from '@testing-library/react';
import NotFoundPage from './NotFound.page';
import Theme from '../../components/App/Theme.styled';

describe('Not Found Landing View', () => {
  it('Should render 404 not found message', () => {
    const { getByText } = render(
      <Theme>
        <NotFoundPage />
      </Theme>
    );
    expect(getByText('404 Nothing Found')).toBeInTheDocument();
  });
});
