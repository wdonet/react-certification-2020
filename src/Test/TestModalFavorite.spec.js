import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ModalFavorite from '../components/ModalFavorite/ModalFavorite.component';
import { AppContext } from '../components/App/App.component';

describe('Modal Favorite Components', () => {
  it('should take a snapshot', () => {
    const { asFragment } = render(
      <Router>
        <AppContext.Provider value={false}>
          <ModalFavorite />
        </AppContext.Provider>
      </Router>
    );
    expect(asFragment(<ModalFavorite />)).toMatchSnapshot();
  });

  it('Home Link is present', () => {
    render(
      <Router>
        <AppContext.Provider value={false}>
          <ModalFavorite />
        </AppContext.Provider>
      </Router>
    );
    expect(screen.getAllByRole('link')).toBeTruthy();
  });
});
