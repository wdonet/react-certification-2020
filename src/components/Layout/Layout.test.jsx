import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import React from 'react';
import Layout from './Layout.component';

describe('Layout component', () => {
  it('Should check all Menu Items in Layout', () => {
    render(<Layout />);
    const totalMenuItems = screen.getAllByRole('listitem').length;

    expect(totalMenuItems).toBe(4);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Favorites')).toBeInTheDocument();
    expect(screen.getByText('Options')).toBeInTheDocument();
  });

  it('Validates Layout snapshot', () => {
    const component = renderer.create(<Layout />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
