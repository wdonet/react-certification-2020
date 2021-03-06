import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import VideoList from '../../components/VideoList';
import VideoDetail from '../../components/VideoDetail';
import youtube from '../../apis/youtube';

const HomeBody = styled.div`
  background-color: #1a243b;
  text-align: center;
  display: flex;
`;
const VideoRelatedWrap = styled.div`
  text-align: center;
  flex: 3;
  margin-top: 100px;
`;
const H4 = styled.h4`
  color: #b9b1b1;
`;
const VideoListWrap = styled.div`
  text-align: center;
  flex: 4;
`;
const VideoDetailWrap = styled.div`
  text-align: center;
  flex: 5;
`;
function HomePage({ videos }) {
  const [video, setVideo] = useState(null);
  const [videoRelated, setVideoRelated] = useState(null);

  const handleVideoSelected = (videoSelected) => {
    console.log(videoSelected);
    setVideo(videoSelected);
  };

  useEffect(() => {
    async function fetchData(videoId) {
      const response = await youtube.get('/search', {
        params: {
          relatedToVideoId: videoId,
          type: 'video',
        },
      });
      console.log(response.data.items);
      setVideoRelated(response.data.items);
    }
    if (video) {
      fetchData(video.id.videoId);
    }
  }, [video]);
  return (
    <HomeBody>
      <VideoRelatedWrap>
        <H4>Related Videos</H4>
        <VideoList videos={videoRelated} handleVideoSelected={handleVideoSelected} />
      </VideoRelatedWrap>
      <VideoDetailWrap>
        <VideoDetail video={video} />
      </VideoDetailWrap>
      <VideoListWrap>
        <VideoList videos={videos} handleVideoSelected={handleVideoSelected} />
      </VideoListWrap>
    </HomeBody>
  );
}

export default HomePage;
