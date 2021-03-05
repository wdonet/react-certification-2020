import React from 'react';
import 'jest-styled-components';
import { data } from './mockData';
import VideoCard from "./VideoCard";
import { getByRole, getByTitle } from '@testing-library/react';
import { renderWithTheme } from '../../utils/testing';

const build = (Component = <VideoCard />) => {
    const { container } = renderWithTheme(Component);
    return { container };
}

describe("VideoCard", () => {

    it('shows content complying with ARIA attributes', () => {
        const video = data.items[0];
        const { container } = build(<VideoCard video={video}/>);
        
        expect( getByRole(container, "figure") ).toBeInTheDocument();
        expect( getByRole(container, "img") ).toHaveAttribute("alt", video.snippet.title);
        expect( getByTitle(container, "video-title") ).toHaveTextContent(video.snippet.title);
        expect( getByRole(container, "figcaption") ).toHaveTextContent(video.snippet.description);
    });
});