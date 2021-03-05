import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../providers/Auth';
import './Home.styles.css';
import Styled from './styledHome';
import VideoContainer from './videoContainer.js';



function HomePage({ homeVideos }) {
  
  const history = useHistory();
  const sectionRef = useRef(null);
  const { authenticated, logout } = useAuth();

  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/');
  }

  return (
    <section className="homepage" ref={sectionRef}>
      <h1>Hello stranger!</h1>
      {authenticated ? (
        <>
          <h2>Good to have you back</h2>
          <span>
            <Link to="/" onClick={deAuthenticate}>
              ← logout
            </Link>
            <span className="separator" />
            <Link to="/secret">show me something cool →         
          </Link>
          </span>
              <Styled.WrapperVideo>
                {homeVideos.map((video) => (
                  <Link key={video.id.videoId}to={`/video/${video.id.videoId}/${video.snippet.title}`}>
                  <VideoContainer
                    title={video.snippet.title}
                    description={video.snippet.description}
                    url={video.snippet.thumbnails.medium.url}
                  />
                  </Link>
                ))}
              </Styled.WrapperVideo>
        </>
      ) : (
        <Link to="/login">let me in →</Link>
      )}
    </section>
  );
}

export default HomePage;
