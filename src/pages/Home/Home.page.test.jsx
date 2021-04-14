// React
import React from 'react';
// Testing
import { screen, render } from '@testing-library/react';
import actions from '../../providers/Videos/VideosActions';
// Components
import HomePage from './Home.page';

describe('Home Page', () => {
  beforeEach(() => {
    render(<HomePage />);
  });
  test('welcome text', () => {
    expect(screen.getByText('Welcome to the Challenge!')).toBeInTheDocument();
  });
  it('should create an action to load videos', () => {
    const expectedAction = {
      type: actions.loadAction.type,
      payload: [],
    };
    expect(actions.loadAction.type).toEqual(expectedAction.type);
  });
});
