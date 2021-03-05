import 'mockData/matchMedia.mock';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from 'components/App';

jest.mock('utils/hooks/useVideos');

describe('App', () => {
  it('renders the header', () => {
    const { getByRole } = render(<App />);
    expect(getByRole('banner')).not.toBeUndefined();
  });
  it('renders the side menu', () => {
    const { getByRole } = render(<App />);
    expect(getByRole('menuitem').textContent).toBe('Home');
  });
  it('renders the content section', () => {
    const { getByRole } = render(<App />);
    expect(getByRole('main')).not.toBeUndefined();
  });

  // it('render new videos after entering text in the search bar', async () => {
  //   const useVideos = jest.fn(() => [VIDEOS.items, undefined]);
  //   const searchVideos = jest.fn((text) => VIDEOS.items.reverse());

  //   const { getAllByRole, getByLabelText } = render(<App />);
  //   const searchBar = getByLabelText('search-bar');

  //   const originalVideos = getAllByRole('listitem');
  //   const expectedVideos = originalVideos.reverse();

  //   fireEvent.focus(searchBar);
  //   fireEvent.change(searchBar, { target: { value: 'SEARCH' } });
  //   fireEvent.keyDown(searchBar, { key: 'Enter', keyCode: 13, charCode: 13 });

  //   const searchedVideos = getAllByRole('listitem');

  //   expect(searchVideos).toBeCalledTimes(1);
  //   expect(searchedVideos).toBe(expectedVideos);
  // });

  it('triggers the Sider collapse when clicking on the Header menu icon', () => {
    const { getByLabelText } = render(<App />);
    const siderMenuIcon = getByLabelText('sider-menu-icon');
    const sider = getByLabelText('sider');

    expect(sider.classList.toString()).toMatch('collapsed');

    fireEvent.click(siderMenuIcon);

    expect(sider.classList.toString()).not.toMatch('collapsed');
  });
});
