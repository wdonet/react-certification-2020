import React from 'react';
import { Col } from 'antd';
import styled from 'styled-components';

const StyledThumbnail = styled(Col)``;
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
`;

const Thumbnail = ({ data }) => {
  return (
    <StyledThumbnail
      role="listitem"
      xs={{ span: 24 }}
      md={{ span: 12 }}
      lg={{ span: 8 }}
      xl={{ span: 6 }}
    >
      <Image src={data.snippet.thumbnails.high.url} />
      <Title>{data.snippet.title}</Title>
      <Subtitle>{data.snippet.channelTitle}</Subtitle>
    </StyledThumbnail>
  );
};

export default Thumbnail;
