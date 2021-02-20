import React from 'react';
import '../../../utils/testing';
import 'jest-styled-components';
import { render, unmountComponentAtNode } from 'react-dom';
import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';
import Card from './Card';

let container;
const build = () => {
  render(<Card />, container);
};

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
  return container;
});

describe('Card', () => {
  it('renders', () => {
    const wrapper = build(<Card />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe('Card styles and props', () => {
  it('applies default styling', () => {
    const tree = mount(<Card />);
    expect(tree).toHaveStyleRule('overflow', 'hidden');
    expect(tree).toHaveStyleRule('height', '345px');
    expect(tree).toHaveStyleRule('width', '345px');
    expect(tree).toHaveStyleRule('margin', '8px');
    expect(tree).toHaveStyleRule('box-shadow', '2px 2px 2px 2px #ccc');
    expect(tree).toHaveStyleRule('border-radius', '5px');
    
  });

  it('has all passed props', () => {
    const EXPECTED_IMAGE = "image";
    const EXPECTED_TITLE = "title";
    const EXPECTED_DESCRIPTION = "description";
    const mounted = mount(
            <Card 
                image={EXPECTED_IMAGE}
                title={EXPECTED_TITLE}
                description={EXPECTED_DESCRIPTION} 
            />
        );
        const srcImage = mounted.find("img").props();
        expect(srcImage.src).toBe(EXPECTED_IMAGE);
        expect(mounted.text()).toContain(EXPECTED_TITLE);
        expect(mounted.text()).toContain(EXPECTED_DESCRIPTION);
  });
});
