import React from 'react';
import 'jest-styled-components';
import { 
    renderWithTheme, 
    youtubeMockedData
} from '../../utils';
import SmallVideoCard from './SmallVideoCard';
import { fireEvent } from '@testing-library/dom';

const build = (Component = <SmallVideoCard />) => {
    const { container } = renderWithTheme(Component);
    return { container };
};

describe('SmallVideoCard', () => {
    it('triggers on click', () => {
        const mockedFunction = jest.fn();
        const { snippet } = youtubeMockedData.items[0];
        const { firstChild } = build(<SmallVideoCard video={{snippet}} onClick={mockedFunction}/>).container;
        
        fireEvent.click(firstChild);

        expect(mockedFunction).toHaveBeenCalledTimes(1);
    });
});
