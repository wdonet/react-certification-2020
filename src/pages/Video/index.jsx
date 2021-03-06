import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import VideoPlayer from '../../components/VideoPlayer';
import { StyledSection, RelatedVideosContainer } from './styled';
import { useYoutubeData } from '../../providers/YoutubeData';

const VideoPage = () => {
  const [relatedVideos, setRelatedVideos] = useState([]);
  const { fetchRelatedTo } = useYoutubeData();
  const { videoId } = useParams();

  console.log({ relatedVideos });
  useEffect(() => {
    const getRelated = async () => {
      const related = await fetchRelatedTo(videoId);
      setRelatedVideos(related);
    };
    getRelated();
  }, []);

  return (
    <StyledSection>
      <VideoPlayer videoId={videoId} />
      <RelatedVideosContainer>
        {/* <VideosList items={items} /> */}
      </RelatedVideosContainer>
    </StyledSection>
  );
};

export default VideoPage;
