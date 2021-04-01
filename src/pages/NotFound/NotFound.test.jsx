import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter, Route } from 'react-router-dom';
import NotFound from '.';

test('Renders not found content', async () => {
  const { container } = render(
    <BrowserRouter>
      <Route path="*">
        <NotFound />
      </Route>
    </BrowserRouter>
  );
  const notFound = document.getElementsByClassName('not-found')[0];
  expect(container.children).toContain(notFound);
});
