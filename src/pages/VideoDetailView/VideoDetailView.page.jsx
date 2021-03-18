import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@material-ui/core';
import Styled from './styledVideoList';
import VideoCard from './VideoCard.js';
import VideoFrame from './VideoFrame';

function VideoDetailViewPage({ detailVideo }) {
  const { getVideoId, title } = useParams();
  const [videoIdList, setVideoIdList] = useState();
  const [changeVideoId, setChangeVideoId] = useState(getVideoId);
  const [videoTitleList, setVideoTitleList] = useState();
  const [changeVideoTitle, setChangeVideoTitle] = useState(title);

  const sectionStyle = {
    position: 'absolute',
    top: '80px',
    width: '100%',
  };

  useEffect(() => {
    if (videoIdList) {
      setChangeVideoId();
      setChangeVideoTitle();
    }
  }, [videoIdList, changeVideoId, changeVideoTitle]);

  return (
    <section style={sectionStyle}>
      <Styled.VideoRightList>
        {detailVideo.map((video) => (
          video.id.videoId ?
          <Button
            key={video.id.videoId}
            onClick={() => {
              setVideoIdList(video.id.videoId);
              setVideoTitleList(video.snippet.title);
            }}
          >
          <VideoCard
            title={video.snippet.title}
            url={video.snippet.thumbnails.medium.url}
          />
          </Button>
          :null
        ))}
      </Styled.VideoRightList>
      <Styled.DisplayVideoLeftFrame>
        <VideoFrame
          videoId={
            videoIdList
              ? `https://www.youtube.com/embed/${videoIdList}?controls=1&autoplay=1`
              : `https://www.youtube.com/embed/${getVideoId}?controls=1&autoplay=1`
          }
        />
        {videoTitleList 
          ? (<Styled.TitleVideoDetail>{videoTitleList}</Styled.TitleVideoDetail>) 
          : (<Styled.TitleVideoDetail>{title}</Styled.TitleVideoDetail>)
        }
      </Styled.DisplayVideoLeftFrame>
    </section>
  );
}

export default VideoDetailViewPage;
