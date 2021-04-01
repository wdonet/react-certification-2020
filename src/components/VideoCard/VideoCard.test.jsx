import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Switch } from 'react-router';
import VideoCard from '.';

const image = 'http://placecorgi.com/250';
const title = 'Corgies';
const description = 'I Love Corgies!';
const VideoText = 'Video Was Loaded!';

test("VideoCard contains all of it's parts", () => {
  const { getByRole, getByText } = render(
    <MemoryRouter>
      <VideoCard image={image} title={title} description={description} />,
    </MemoryRouter>
  );

  expect(getByRole('img', { name: 'thumbnail' })).toBeInTheDocument();
  expect(getByText(title)).toBeInTheDocument();
  expect(getByText(description)).toBeInTheDocument();
});

test('VideoCard links to video', () => {
  const { getByRole, getByText } = render(
    <MemoryRouter>
      <Switch>
        <Route path="/video/:videoId">{VideoText}</Route>
        <Route path="*">
          <VideoCard image={image} title={title} description={description} />
        </Route>
      </Switch>
    </MemoryRouter>
  );

  userEvent.click(getByRole('link'));
  expect(getByText(VideoText)).toBeInTheDocument();
});
