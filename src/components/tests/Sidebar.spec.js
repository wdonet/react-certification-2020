import React from 'react';
import { render, screen } from '@testing-library/react';
import Sidebar from '../Sidebar';

describe('Sidebar component', () => {
  it('should render a sidebar', () => {
    render(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeDefined();
  });

  it('should contain 2 li elements', () => {
    render(<Sidebar />);
    const sidebar = screen.getByTestId('sidebar');
    expect(sidebar.querySelectorAll('li')).toHaveLength(2);
  });
});
