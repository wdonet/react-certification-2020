import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from './Layout.component';
import Theme from '../App/App.styled';

describe('Layout Component Tests', () => {
  beforeEach(() => {
    render(
      <Theme>
        <Layout />
      </Theme>
    );
  });

  it('Should render the layout component', async () => {
    expect(screen.getByTestId('CustomAppBar')).toBeInTheDocument();
    expect(screen.getByTestId('ContentContainer')).toBeInTheDocument();
  });
});
