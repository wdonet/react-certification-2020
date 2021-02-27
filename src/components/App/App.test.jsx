import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App.component';
import Theme from './App.styled';

describe('App Component Tests', () => {
  beforeEach(() => {
    render(
      <Theme>
        <App />
      </Theme>
    );
  });

  it('Should render the App component showing the home page', async () => {
    expect(screen.getByTestId('Home')).toBeInTheDocument();
  });

  it('Should redirect to home the home button', async () => {
    const menuButton = screen.getByTestId('MenuButton');
    menuButton.click();
    expect(screen.getByTestId('Home')).toBeInTheDocument();
  });
});
