import React, { useState } from 'react';
import youtube from '../../../utils/youtube.js';
import filterVideoType from '../../../utils/fns.js';
import YoutubeContext from '../../../context/YoutubeContext.jsx';

const SearchBar = () => {
  const [yt_query, setYTQuery] = useState('wizeline');
  //const [ search, setSearch ] = useState(null);

  const searchVideos = async () => {
    // If search bar is empty, do nothing
    if (yt_query === '' || yt_query === null) return;

    // Search for videos
    const response = await youtube.get('/search', {
      params: {
        q: yt_query,
      },
    }); //.then((response) => response.json())

    // Filter only videos from the response
    let results = filterVideoType(response, 'video');

    console.log(results.data.items);
  };

  // Adding functionality when pressing Enter in the search bar
  const searchText = (keyPressed) => {
    if (keyPressed === 'Enter') {
      searchVideos();
    }
  };

  return (
    <YoutubeContext.Consumer>
      {({ response }) => (
        <>
          <input
            className="header-bar"
            id="search-bar"
            placeholder="🎥  Search for videos"
            onChange={(event) => setYTQuery(event.target.value)}
            onKeyDown={(event) => searchText(event.key)}
          />
          <button className="find" onClick={searchVideos}>
            Find Videos
          </button>
        </>
      )}
    </YoutubeContext.Consumer>
  );
};

export default SearchBar;
