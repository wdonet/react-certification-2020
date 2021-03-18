import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import HomePage from './Home.page';

describe('HomePage', () => {

    it('renders Home Page Title', () => {
        const { getByText } = render(
          <Router>
            <HomePage />
          </Router>
        );
        expect(getByText('Welcome to the Challenge!')).not.toBeUndefined();
      });

  });
