import React from 'react';
import VideosMock from '../../mocks/youtube-videos-mock';

// import './Home.styles.css';

function HomePage() {
  console.log(VideosMock);
  return (
    <section>
      {VideosMock.items.map((video) => {
        return <div>{video.snippet.title}</div>;
      })}
    </section>
  );
}

export default HomePage;
