import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import SecretPage from './Secret.page';

describe('Secret Page', () => {
  it('Check welcome message in page', () => {
    render(
      <BrowserRouter>
        <SecretPage />
      </BrowserRouter>
    );

    expect(screen.queryByText('welcome, voyager...')).toBeInTheDocument();
  });

  it('Validates Secret snapshot', () => {
    const component = renderer.create(
      <BrowserRouter>
        <SecretPage />
      </BrowserRouter>
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
