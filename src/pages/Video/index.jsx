import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import VideoPlayer from '../../components/VideoPlayer';
import {
  StyledSection,
  RelatedVideosContainer,
  VideoPlayerContainer,
  RelatedVideoTitle,
  MainVideoTitle,
} from './styled';
import { useYoutubeData } from '../../providers/YoutubeData';

import VideoCardV2 from '../../components/VideoCardV2';

const VideoPage = () => {
  const [relatedVideos, setRelatedVideos] = useState([]);
  const { fetchRelatedTo } = useYoutubeData();
  const { videoId } = useParams();

  useEffect(() => {
    const getRelated = async () => {
      const related = await fetchRelatedTo(videoId);
      if (related) setRelatedVideos(related);
    };

    const getVideoData = async () => {};
    getRelated();
    getVideoData();
  }, [videoId]);

  const relatedVideosMapped = relatedVideos.map((video) => {
    const {
      snippet: {
        title,
        thumbnails: {
          medium: { url },
        },
        channelTitle,
      },
      id: { videoId: relatedVideoId },
    } = video;
    return (
      <Link
        style={{ 'text-decoration': 'none' }}
        to={`/${relatedVideoId}`}
        key={relatedVideoId}
      >
        <VideoCardV2 image={url} title={title} channelTitle={channelTitle} />
      </Link>
    );
  });

  return (
    <StyledSection>
      <VideoPlayerContainer>
        <VideoPlayer videoId={videoId} />
        <MainVideoTitle>Video Title</MainVideoTitle>
      </VideoPlayerContainer>
      <RelatedVideosContainer>
        <RelatedVideoTitle>Related Videos</RelatedVideoTitle>
        MainVideoTitle
        {relatedVideosMapped}
      </RelatedVideosContainer>
    </StyledSection>
  );
};

export default VideoPage;
