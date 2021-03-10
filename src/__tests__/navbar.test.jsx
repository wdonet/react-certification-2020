import React from 'react';
import ReactDOM from 'react-dom';

import NavBar from '../components/NavBar/NavBar.component';


describe('Check API', () => {
    it('Checks if Navbar is rendering Wizline logo', () => {
        const container = document.createElement('div');
        ReactDOM.render(<NavBar />, container);
        expect(container.textContent).toMatch('WIZELINE');
    });
});