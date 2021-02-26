import React from 'react';
import renderer from 'react-test-renderer';
import Content from './Content.component';
import mockData from '../../jsons/youtube-videos-mock.json';

describe('Content component', () => {
  it('maps all the elements from its items prop', () => {
    const items = mockData.items.slice(1);
    const element = renderer.create(<Content items={items} />).toJSON();

    expect(element.children.length).toBe(items.length);
  });
});
