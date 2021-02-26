import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import NotFoundPage from './NotFound.page';

describe('Not Found Page', () => {
  it('Check link to Return', () => {
    render(
      <BrowserRouter>
        <NotFoundPage />
      </BrowserRouter>
    );

    expect(screen.queryByText('Back to Home')).toBeInTheDocument();
  });

  it('Validates NotFound snapshot', () => {
    const component = renderer.create(
      <BrowserRouter>
        <NotFoundPage />
      </BrowserRouter>
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
