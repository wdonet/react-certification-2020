import { useEffect, useState } from 'react';
// import { google } from 'googleapis';

const useYoutubeAPI = (searchTerm) => {
  const [searchResult, setSearchResult] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchResults = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchTerm}&key=${process.env.REACT_APP_YOUTUBE_API}`
        );
        const json = await response.json();
        console.log('---- FETCH ----');
        console.log(response);
        // const data = await response.json();
        // console.log(data.result);
        // const youtube = google.youtube({
        //   version: 'v3',
        //   auth: 'AIzaSyAiCtGHVR3dYknxKxeY0YHm1udkmUC-kuw',
        //   http2: false,
        // });
        // const videos = await youtube.search.list({
        //   part: ['snippet'],
        //   maxResults: 25,
        //   q: searchTerm,
        // });
        // setSearchResult(videos);
        // console.log(s.json());
        setSearchResult(json);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchResults();
  }, [searchTerm]);

  return { searchResult, loading };
};

export default useYoutubeAPI;
