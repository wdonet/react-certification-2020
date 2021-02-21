import React from 'react';
import { render } from '@testing-library/react';
import Layout from './Layout.component';
import Theme from '../App/App.styled';

describe('Layout Component Tests', () => {
  const setup = () => {
    const utils = render(
      <Theme>
        <Layout />
      </Theme>
    );
    return {
      ...utils,
    };
  };

  it('Should render the layout component', async () => {
    const { getByTestId, asFragment } = setup();
    expect(getByTestId('CustomAppBar')).toBeInTheDocument();
    expect(getByTestId('ContentContainer')).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
