import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import VideoPlayer from '../../components/VideoPlayer';
import { StyledSection, RelatedVideosContainer, VideoPlaterContainer } from './styled';
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
    getRelated();
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
      <Link to={`/${relatedVideoId}`} key={relatedVideoId}>
        <VideoCardV2 image={url} title={title} channelTitle={channelTitle} />
      </Link>
    );
  });

  return (
    <StyledSection>
      <VideoPlaterContainer>
        <VideoPlayer videoId={videoId} />
      </VideoPlaterContainer>
      <RelatedVideosContainer>{relatedVideosMapped}</RelatedVideosContainer>
    </StyledSection>
  );
};

export default VideoPage;
