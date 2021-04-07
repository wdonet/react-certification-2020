import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import VideoPlayer from '../../components/VideoPlayer';
import Icon from '../../components/Icon';
import {
  StyledSection,
  RelatedVideosContainer,
  VideoPlayerContainer,
  RelatedVideoTitle,
  MainVideoTitle,
  MainVideoDescription,
  TitleContainer,
} from './styled';
import { useYoutubeData } from '../../providers/YoutubeData';
import { useGlobal } from '../../providers/Global';

import VideoCardV2 from '../../components/VideoCardV2';
import HeaderButton from '../../components/HeaderButton';

const VideoPage = () => {
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [videoDetails, setVideoDetails] = useState({});
  const { fetchVideoDetails, fetchRelatedVideos } = useYoutubeData();
  const { favorites, saveFavorite, deleteFavorite } = useGlobal();
  console.log({ favorites });
  const { videoId } = useParams();
  const [isFavorite, setIsFavorite] = useState(!!favorites[videoId]);

  useEffect(() => {
    const getRelated = async () => {
      const videos = await fetchRelatedVideos(videoId);

      if (videos) setRelatedVideos(videos);
    };

    const getVideoData = async () => {
      const data = await fetchVideoDetails(videoId);
      if (data) setVideoDetails(data);
    };
    setIsFavorite(!!favorites[videoId]);
    getRelated();
    getVideoData();
  }, [videoId]);

  useEffect(() => {
    if (Object.keys(favorites).length >= 0) {
      setIsFavorite(!!favorites[videoId]);
    }
  }, [favorites]);

  const addToFavorites = () => {
    if (favorites[videoId]) deleteFavorite(videoId);
    else saveFavorite(videoId, videoDetails);
  };

  const relatedVideosMapped = relatedVideos.map((video) => {
    const {
      snippet: {
        title = '',
        thumbnails: { medium: { url } = {} } = {},
        channelTitle = '',
      } = {},
      id: { videoId: relatedVideoId } = {},
    } = video;
    return (
      <Link
        style={{ textDecoration: 'none' }}
        to={`/video/${relatedVideoId}`}
        key={relatedVideoId}
      >
        <VideoCardV2 image={url} title={title} channelTitle={channelTitle} />
      </Link>
    );
  });

  const { snippet: { title = '', description = '' } = {} } = videoDetails;

  return (
    <StyledSection>
      <VideoPlayerContainer>
        <VideoPlayer videoId={videoId} />
        <TitleContainer>
          <MainVideoTitle>{title}</MainVideoTitle>
          <HeaderButton onClick={addToFavorites} fillColor={isFavorite}>
            <Icon icon={faHeart} size="small" />
          </HeaderButton>
        </TitleContainer>
        <MainVideoDescription>{description}</MainVideoDescription>
      </VideoPlayerContainer>
      <RelatedVideosContainer>
        <RelatedVideoTitle>Related Videos</RelatedVideoTitle>
        {relatedVideosMapped}
      </RelatedVideosContainer>
    </StyledSection>
  );
};

export default VideoPage;
