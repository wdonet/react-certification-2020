import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';
import { AppContext } from '../components/App/App.component';

describe('Header Components', () => {
  it('should take a snapshot', () => {
    const { asFragment } = render(
      <AppContext.Provider value={false}>
        <Header />
      </AppContext.Provider>
    );
    expect(asFragment(<Header />)).toMatchSnapshot();
  });

  it('Renders a textbox', () => {
    // const { debug, getByRole } = render(
    const { getByRole } = render(
      <AppContext.Provider value={false}>
        <Header />
      </AppContext.Provider>
    );

    const searchTextBox = getByRole('textbox');
    expect(searchTextBox).toBeInTheDocument();
    // debug();
  });

  it('Expect the string Dark Mode', () => {
    render(
      <AppContext.Provider value={false}>
        <Header />
      </AppContext.Provider>
    );
    expect(screen.getByText('Dark Mode')).toBeTruthy();
  });

  it('Toggle element is present in Header', () => {
    render(
      <AppContext.Provider value={false}>
        <Header />
      </AppContext.Provider>
    );
    expect(screen.getByRole('checkbox')).toBeTruthy();
  });
});
