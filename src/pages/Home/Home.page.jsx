import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.styles.css';
import Styled from './styledHome';
import VideoContainer from './videoContainer.js';

function HomePage({ homeVideos }) {
  const sectionRef = useRef(null);

  return (
    <section className="homepage" ref={sectionRef}>
      <h1>Hello!</h1>
      <>
        <h2>Good to have you back</h2>
        <Styled.WrapperVideo>
          {homeVideos.map((video) =>
            video.id.videoId ? (
              <Link
                key={video.id.videoId}
                to={`/video/${video.id.videoId}/${video.snippet.title}`}
              >
                <VideoContainer
                  title={video.snippet.title}
                  description={video.snippet.description}
                  url={video.snippet.thumbnails.medium.url}
                />
              </Link>
            ) : null
          )}
        </Styled.WrapperVideo>
      </>
    </section>
  );
}

export default HomePage;
