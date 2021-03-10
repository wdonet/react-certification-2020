import React from 'react';
import ReactDOM from 'react-dom';

import getVideos from '../pages/Home/Home.page';
import apidata from '../ApiData/youtube-api.json';

import YouTubeCard from '../components/YouTubeCard/YouTubeCard.component';


describe('Check API', () => {
    it('verifies if API returns values', () => {
        const result = getVideos(apidata);
        expect(result).toEqual(expect.anything());
    });
});

describe('YouTubeCard Component test', () => {
    it('Checks title', () => {
             const container = document.createElement('div');
             ReactDOM.render(<YouTubeCard title={apidata.items[1].snippet.title} />, container);
             expect(container.textContent).toMatch('Video Tour | Welcome to Wizeline Guadalajara');
         });
    it('Checks Description', () => {
        const container = document.createElement('div');
        ReactDOM.render(<YouTubeCard description={apidata.items[1].snippet.description} />, container);
        expect(container.textContent).toMatch('Follow Hector Padilla, Wizeline Director of Engineering, for a lively tour of our office. In 2018, Wizeline opened its stunning new office in Guadalajara, Jalisco, ...');
    });
});

// test('Check title', () => {
//     const container = document.createElement('div');
//     ReactDOM.render(<YouTubeCard title={apidata.items[1].snippet.title} />, container);
//     expect(container.textContent).toMatch('Video Tour | Welcome to Wizeline Guadalajara');
// });

// test('Check description', () => {
//     const container = document.createElement('div');
//     ReactDOM.render(<YouTubeCard description={apidata.items[1].snippet.description} />, container);
//     expect(container.textContent).toMatch('Follow Hector Padilla, Wizeline Director of Engineering, for a lively tour of our office. In 2018, Wizeline opened its stunning new office in Guadalajara, Jalisco, ...');
// });
