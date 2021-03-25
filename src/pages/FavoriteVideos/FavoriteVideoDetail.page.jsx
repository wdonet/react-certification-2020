import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@material-ui/core';
import Styled from '../VideoDetailView/styledVideoList';
import VideoCard from '../VideoDetailView/VideoCard.js';
import VideoFrame from '../VideoDetailView/VideoFrame';

function FavoriteVideoDetail() {
  const { linkFavoriteVideoId, linkFavoiteVideoTitle } = useParams();
  const [videoIdList, setVideoIdList] = useState();
  const [changeVideoId, setChangeVideoId] = useState(linkFavoriteVideoId);
  const [videoTitleList, setVideoTitleList] = useState();
  const [changeVideoTitle, setChangeVideoTitle] = useState(linkFavoiteVideoTitle);
  const FavoriteVideo = JSON.parse(window.localStorage.getItem('SavedVideos'));

  const myStorage = window.localStorage;
  const arrRemoveFavorites = JSON.parse(myStorage.getItem('SavedVideos'));

  const BtnRemoveFavoriteVideos = () => {
    const i = arrRemoveFavorites.findIndex(
      (removeVideoId) => removeVideoId.FavoriteVideoId === videoIdList
    );
    if (i !== -1) {
      arrRemoveFavorites.splice(i, 1);
      localStorage.setItem('SavedVideos', JSON.stringify(arrRemoveFavorites));
    }
    console.log(arrRemoveFavorites);
  };

  useEffect(() => {
    if (videoIdList) {
      setChangeVideoId();
      setChangeVideoTitle();
    }
  }, [videoIdList, changeVideoId, changeVideoTitle]);

  const sectionStyle = {
    position: 'absolute',
    top: '80px',
    width: '100%',
  };

  return (
    <section style={sectionStyle}>
      <Styled.VideoRightList>
        {FavoriteVideo.map((video) =>
          video.FavoriteVideoId ? (
            <Button
              key={video.FavoriteVideoId}
              onClick={() => {
                setVideoIdList(video.FavoriteVideoId);
                setVideoTitleList(video.FavoriteTitle);
              }}
            >
              <VideoCard title={video.FavoriteTitle} url={video.Favoriteimage} />
            </Button>
          ) : null
        )}
      </Styled.VideoRightList>
      <Styled.DisplayVideoLeftFrame>
        <VideoFrame
          videoId={
            videoIdList
              ? `https://www.youtube.com/embed/${videoIdList}?controls=1&autoplay=1`
              : `https://www.youtube.com/embed/${linkFavoriteVideoId}?controls=1&autoplay=1`
          }
        />
        {videoTitleList ? (
          <Styled.TitleVideoDetail>{videoTitleList}</Styled.TitleVideoDetail>
        ) : (
          <Styled.TitleVideoDetail>{linkFavoiteVideoTitle}</Styled.TitleVideoDetail>
        )}

        <Styled.AddToFavorite
          onClick={() => {
            BtnRemoveFavoriteVideos(videoIdList);
          }}
        >
          <span role="img" aria-label="star">
            &#128465;
          </span>
          Remove From Favorites
        </Styled.AddToFavorite>
      </Styled.DisplayVideoLeftFrame>
    </section>
  );
}

export default FavoriteVideoDetail;
