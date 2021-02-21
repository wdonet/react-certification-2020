import React from 'react';
import { render } from '@testing-library/react';
import App from './App.component';
import Theme from './App.styled';

describe('App Component Tests', () => {
  const setup = () => {
    const utils = render(
      <Theme>
        <App />
      </Theme>
    );
    return {
      ...utils,
    };
  };

  it('Should render the App component', async () => {
    setup();
  });
});
