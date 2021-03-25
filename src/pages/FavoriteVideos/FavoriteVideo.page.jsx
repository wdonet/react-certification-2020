import React from 'react';
import { Link } from 'react-router-dom';
import Styled from '../Home/styledHome';
import VideoContainer from '../Home/videoContainer.js';

function FavoriteVideo() {
  const favoriteVideoLocalStorage = JSON.parse(
    window.localStorage.getItem('SavedVideos')
  );
  const sectionStyle = {
    position: 'absolute',
    top: '80px',
    width: '100%',
  };
  return (
    <section className="favoriteVideo" style={sectionStyle}>
      <h1>Favorite Video</h1>
      {favoriteVideoLocalStorage ? (
        <Styled.WrapperVideo>
          {favoriteVideoLocalStorage.map((video) => (
            <Link
              key={video.FavoriteVideoId}
              to={`/favoriteVideoDetail/${video.FavoriteVideoId}/${video.FavoriteTitle}`}
            >
              <VideoContainer title={video.FavoriteTitle} url={video.Favoriteimage} />
            </Link>
          ))}
        </Styled.WrapperVideo>
      ) : null}
    </section>
  );
}

export default FavoriteVideo;
