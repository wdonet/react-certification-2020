import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledThumbnail = styled.div``;

const Image = styled.img`
  border-radius: 4px;
  width: 100%;
`;

const Title = styled.h2`
  font-size: 1.25rem;
  margin-top: 0.8rem;
  margin-bottom: 0px;
`;

const Subtitle = styled.h3`
  font-size: 1rem;
  color: #696969;
  margin-bottom: 0px;
`;

const SubtitleContainer = styled.div``;

const getVideoId = (video) => (video.id.videoId ? video.id.videoId : video.id);

const Thumbnail = ({ data }) => {
  if (!data.snippet) {
    console.log(data);
    return null;
  }

  return (
    <StyledThumbnail>
      <Link
        style={{ textDecoration: 'none' }}
        to={{
          pathname: '/watch',
          search: `?id=${getVideoId(data)}`,
          state: { video: data },
        }}
      >
        <Image src={data.snippet.thumbnails.high.url} />
        <Title>{data.snippet.title}</Title>
        <SubtitleContainer>
          <Subtitle>{data.snippet.channelTitle}</Subtitle>
        </SubtitleContainer>
      </Link>
    </StyledThumbnail>
  );
};

export default Thumbnail;
