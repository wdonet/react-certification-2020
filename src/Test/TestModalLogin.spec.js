import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ModalLogin from '../components/ModalLogin/ModalLogin.component';
import { AppContext } from '../components/App/App.component';

describe('ModalLogin Components', () => {
  it('should take a snapshot', () => {
    const { asFragment } = render(
      <Router>
        <AppContext.Provider value={false}>
          <ModalLogin />
        </AppContext.Provider>
      </Router>
    );
    expect(asFragment(<ModalLogin />)).toMatchSnapshot();
  });

  it('Renders a textbox', () => {
    render(
      <Router>
        <AppContext.Provider value={false}>
          <ModalLogin />
        </AppContext.Provider>
      </Router>
    );
    expect(screen.getAllByRole('textbox').length).toBe(1);
  });

  it('Renders a button', () => {
    render(
      <Router>
        <AppContext.Provider value={false}>
          <ModalLogin />
        </AppContext.Provider>
      </Router>
    );
    expect(screen.getAllByRole('button').length).toBe(1);
  });
});
