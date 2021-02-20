import React, { useState } from 'react';
import VideoCard from '../../components/VideoCard/VideoCard.component';
import { SearchResults } from './Home.styled';

function HomePage() {
  const [searchResult, setSearchResult] = useState(null);

  async function getSearchResult() {
    const response = await fetch(
      'https://gist.githubusercontent.com/jparciga/1d4dd34fb06ba74237f8966e2e777ff5/raw/f3af25f1505deb67e2cc9ee625a633f24d8983ff/youtube-videos-mock.json'
    );
    return response.json();
  }

  if (searchResult == null) {
    getSearchResult()
      .then((data) => {
        const videoData = data.items.filter((item) => item.id.videoId);
        setSearchResult(videoData);
      })
      .catch((error) => console.log(error));
  }

  return (
    searchResult && (
      <SearchResults>
        {searchResult.map(({ id, snippet }) => (
          <VideoCard
            key={id.videoId}
            image={snippet.thumbnails.medium.url}
            title={snippet.title}
            description={snippet.description}
          />
        ))}
      </SearchResults>
    )
  );
}

export default HomePage;
