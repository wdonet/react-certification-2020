import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import VideoList from '../../components/VideoList';
import Fetch from '../../hooks/useFetch';
import VideoDetail from '../../components/VideoDetail';
import SearchContext from '../../state/SearchContext';

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
function HomePage() {
  const { state } = useContext(SearchContext);
  console.log(state.search);
  const [videos, setVideos] = useState([]);
  const [video, setVideo] = useState(null);
  const [videosRelated, setVideosRelated] = useState(null);

  const handleVideoSelected = (videoSelected) => {
    console.log(videoSelected);
    setVideo(videoSelected);
  };

  useEffect(() => {
    async function fetchData() {
      const params = {
        params: {
          q: state.search,
        },
      };
      const fetchedVideos = await Fetch(params);
      console.log(fetchedVideos.items);
      setVideos(fetchedVideos.items);
    }
    fetchData();
  }, [state.search]);

  useEffect(() => {
    async function fetchData(videoId) {
      const params = {
        params: {
          relatedToVideoId: videoId,
          type: 'video',
        },
      };
      const fetchedVideos = await Fetch(params);
      console.log(fetchedVideos.items);
      setVideosRelated(fetchedVideos.items);
    }
    if (video) {
      fetchData(video.id.videoId);
    }
  }, [video]);

  return (
    <HomeBody>
      <VideoRelatedWrap>
        <H4>Related Videos</H4>
        <VideoList videos={videosRelated} handleVideoSelected={handleVideoSelected} />
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
