import React, { useCallback, useContext, useEffect, useState } from 'react';
import {
  searchVideosMock,
  searchRelatedMock,
  getVideoDetailsMock,
} from '../../mocks/mockYouTubeResults';

const { REACT_APP_YOUTUBE_API_KEY, REACT_APP_YOUTUBE_API_URL } = process.env;

const YouTubeContext = React.createContext(null);

function useYouTube() {
  const context = useContext(YouTubeContext);
  if (!context) {
    throw new Error(`Can't use "useYouTube" without a YouTubeProvider!`);
  }
  return context;
}

function YouTubeProvider({ children, isMock = false }) {
  const [content, setContent] = useState(<span>Loading!</span>);
  const [gapi, setGapi] = useState(null);

  useEffect(() => {
    if (!isMock) {
      if (!window.gapi) {
        const added = document.getElementById('youtube-api');
        if (!added) {
          const script = document.createElement('script');
          script.src = 'https://apis.google.com/js/api.js';
          script.id = 'youtube-api';
          document.head.insertBefore(script, document.head.firstChild);
          script.onload = () => {
            setGapi(window.gapi);
          };
        }
      } else {
        setGapi(window.gapi);
      }
    }
  }, [isMock]);

  useEffect(() => {
    if (!isMock) {
      if (gapi) {
        gapi.load('client', () => {
          gapi.client
            .init({
              apiKey: REACT_APP_YOUTUBE_API_KEY,
              discoveryDocs: [REACT_APP_YOUTUBE_API_URL],
            })
            .then(() => setContent(children));
        });
      }
    } else {
      const simulation = setTimeout(() => setContent(children), 100);
      return () => {
        clearTimeout(simulation);
      };
    }
  }, [children, gapi, isMock]);

  const searchVideos = useCallback(
    async (q) => {
      const response = await gapi.client.youtube.search.list({
        part: ['snippet'],
        maxResults: 30,
        q,
        type: ['video'],
      });
      return response.result;
    },
    [gapi]
  );

  const searchRelated = useCallback(
    async (relatedToVideoId) => {
      const response = await gapi.client.youtube.search.list({
        part: ['snippet'],
        maxResults: 20,
        relatedToVideoId,
        type: ['video'],
      });
      return response.result;
    },
    [gapi]
  );

  const getVideoDetails = useCallback(
    async (...id) => {
      const response = await gapi.client.youtube.videos.list({
        part: ['snippet'],
        id,
      });
      return response.result;
    },
    [gapi]
  );

  const values = !isMock
    ? { searchVideos, searchRelated, getVideoDetails }
    : {
        searchVideos: searchVideosMock,
        searchRelated: searchRelatedMock,
        getVideoDetails: getVideoDetailsMock,
      };

  return <YouTubeContext.Provider value={values}>{content}</YouTubeContext.Provider>;
}

export { useYouTube };
export default YouTubeProvider;
