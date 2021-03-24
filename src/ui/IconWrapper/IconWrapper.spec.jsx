import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import IconWrapper from './IconWrapper';
import { fireEvent } from '@testing-library/dom';

const build = (Component = <IconWrapper />) => {
  const { container } = render(Component);
  return { container };
};


describe('IconWrapper behavior and props', () => {
    it('triggers onClick function', () => {
        const mockedFunction = jest.fn();
        const { firstChild }  = build(<IconWrapper onClick={mockedFunction}/>).container;
        fireEvent.click(firstChild);
        expect(mockedFunction).toHaveBeenCalledTimes(1);
    });

    it('has passed properties', () => {
        const EXPECTED_ID = "test-id";
        const { firstChild }  = build(<IconWrapper id={EXPECTED_ID}/>).container;
        expect(firstChild).toHaveProperty('id', EXPECTED_ID);
    });
});