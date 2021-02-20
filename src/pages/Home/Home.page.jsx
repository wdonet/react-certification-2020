import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../../providers/Auth';
import './Home.styles.css';
import Style from "./HomePage.styles"
import VideoCard from "../../components/VideoCard/VideoCard"
import Mock from "../../assets/youtube-videos-mock.json"

function HomePage() {
  const history = useHistory();
  const sectionRef = useRef(null);
  const { authenticated, logout } = useAuth();
  const items = Mock.items;

  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/');
  }

  return (
    <section className="homepage" ref={sectionRef}>
      <h1>Hello stranger!</h1>
      {authenticated ? (
        <Style.container>
          {items.map((video) => 
            <VideoCard 
              key={video.etag}
              title={video.snippet.title}
              thumbnail={video.snippet.thumbnails.default.url}
            />
          )}

        </Style.container>
      ) : (
        <Link to="/login">let me in →</Link>
      )}
    </section>
  );
}

export default HomePage;
