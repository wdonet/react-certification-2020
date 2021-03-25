import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header';
import { AppContext } from '../components/App/App.component';

describe('Header Components', () => {
  it('should take a snapshot', () => {
    const { asFragment } = render(
      <Router>
        <AppContext.Provider value={false}>
          <Header />
        </AppContext.Provider>
      </Router>
    );
    expect(asFragment(<Header />)).toMatchSnapshot();
  });

  it('Renders a textbox', () => {
    // const { debug, getByRole } = render(
    const { getByRole } = render(
      <Router>
        <AppContext.Provider value={false}>
          <Header />
        </AppContext.Provider>
      </Router>
    );

    const searchTextBox = getByRole('textbox');
    expect(searchTextBox).toBeInTheDocument();
    // debug();
  });

  it('Expect the string Dark Mode', () => {
    render(
      <Router>
        <AppContext.Provider value={false}>
          <Header />
        </AppContext.Provider>
      </Router>
    );
    expect(screen.getByText('Dark Mode')).toBeTruthy();
  });

  it('Toggle element is present in Header', () => {
    render(
      <Router>
        <AppContext.Provider value={false}>
          <Header />
        </AppContext.Provider>
      </Router>
    );
    expect(screen.getByRole('checkbox')).toBeTruthy();
  });
});
