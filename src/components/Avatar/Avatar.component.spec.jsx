import React from 'react';
import renderer from 'react-test-renderer';
import Avatar from './Avatar.component';
import AuthProvider from '../../providers/Auth';

describe('Avatar component', () => {
  it('renders an img tag', () => {
    const element = renderer
      .create(
        <AuthProvider>
          <Avatar />
        </AuthProvider>
      )
      .toJSON();

    expect(element.type).toBe('img');
  });

  it('has an alt attribute', () => {
    const element = renderer
      .create(
        <AuthProvider>
          <Avatar />
        </AuthProvider>
      )
      .toJSON();

    expect(element.props.alt).toBeTruthy();
  });
});
