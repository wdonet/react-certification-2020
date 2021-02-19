import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { render } from '@testing-library/react';
import NotFound from './NotFound.page';

describe('<NotFound />', () => {
  test('Renders correctly', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Switch>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    );
    const label = getByTestId('NotFound');
    expect(label).not.toBe(null);
  });
});
