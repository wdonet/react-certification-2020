import React from 'react';
import { render } from '@testing-library/react';
import VideoCardContainer from './VideoCardContainer';
import { contextWrapper, youtubeMockedData } from '../../utils'
import { lightTheme } from '../../providers/themes'
import { fireEvent, getAllByTestId } from '@testing-library/dom';
import AppContext from '../../providers/AppContext';

const build = (Component = <VideoCardContainer/>) => {
    const contextValue = { theme: lightTheme };
    const wrappedContext = contextWrapper(AppContext, contextValue, Component);
    const { container } = render(wrappedContext);
    return { 
        container,
        videoCards: () => getAllByTestId(container, (id) => id.includes('video-card-')),
    };
}

describe('Generic video container', () => {
    it('shows videos passed in videosList', () => {
        const { videoCards } = build(<VideoCardContainer videosList={youtubeMockedData.items}/>);
        expect(videoCards()).toHaveLength(youtubeMockedData.items.length);
    });

    it('shows "Custom message" notice passed as prop', () => {
        const NoVideos = () => <div>Custom message</div>;
        const { firstChild } = build(<VideoCardContainer noVideosNotice={<NoVideos/>}/>).container;
        expect(firstChild).toHaveTextContent("Custom message");
    });

    it('shows "No videos available" when no notice passed', () => {
        const { firstChild } = build(<VideoCardContainer />).container;
        expect(firstChild).toHaveTextContent("No videos available");
    });

    it('triggers "onClick" function passed as prop returning video info', () =>{
        const mockedOnClick = jest.fn();
        const video = youtubeMockedData.items[0];
        const { videoCards } = build(<VideoCardContainer videosList={youtubeMockedData.items.slice(0,1)} onClick={mockedOnClick}/>);

        fireEvent.click(videoCards()[0].firstChild);
        
        expect(mockedOnClick).toHaveBeenCalledTimes(1);
        expect(mockedOnClick).toHaveBeenCalledWith(video);
    })
});