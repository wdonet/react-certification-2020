import React from 'react';
import { render , screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Card from './index';

const MOCK_PROPS = {
    imgUrl : "demo_url",
    title : "Demo Title",
    description : "Demo Description",
};

describe('Card', () => {
    it('renders a Video title', () => {
        const { getAllByRole } = render(
            <Card props={MOCK_PROPS} />
        );
        expect(getAllByRole('heading')[0].tagName).toBe('H3');
      });
});