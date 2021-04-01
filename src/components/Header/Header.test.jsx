import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route, Switch } from 'react-router';
import Header from '.';

const DefaultText = 'Default Route';
const SearchText = 'Search Route';
const BadText = 'Bad Route';

function renderWithNavigation() {
  return render(
    <MemoryRouter>
      <Header />
      <Switch>
        <Route exact path={['/', '/search']}>
          <div>{DefaultText}</div>
        </Route>
        <Route path="/search/:searchQuery">
          <div>{SearchText}</div>
        </Route>
        <Route path="*">
          <div>{BadText}</div>
        </Route>
      </Switch>
    </MemoryRouter>
  );
}

describe("Header renders all of it's parts", () => {
  test('Renders menu button', () => {
    const { getByRole } = render(<Header />);
    expect(getByRole('button', { name: 'Menu' })).toBeInTheDocument();
  });

  test('Renders search bar', () => {
    const { getByLabelText } = render(<Header />);
    expect(getByLabelText('search')).toBeInTheDocument();
  });

  test('Renders menu button', () => {
    const { getByAltText } = render(<Header />);
    expect(getByAltText('Theme')).toBeInTheDocument();
  });

  test('Renders loggin button', () => {
    const { getByRole } = render(<Header />);
    expect(getByRole('button', { name: 'Loggin' })).toBeInTheDocument();
  });
});

test('Search for new videos', () => {
  const { getByText, getByLabelText } = renderWithNavigation();
  const input = getByLabelText('search');
  const searchQuery = 'Wizeline';

  expect(getByText(DefaultText)).toBeInTheDocument();

  fireEvent.change(input, { target: { value: searchQuery } });
  expect(input.value).toBe(searchQuery);

  input.focus();
  fireEvent.keyDown(document.activeElement, {
    key: 'Enter',
    code: 'Enter',
  });
  expect(getByText(SearchText)).toBeInTheDocument();

  fireEvent.change(input, { target: { value: '' } });
  input.focus();
  fireEvent.keyDown(document.activeElement, {
    key: 'Enter',
    code: 'Enter',
  });
  expect(getByText(DefaultText)).toBeInTheDocument();
});
