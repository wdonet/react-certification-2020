import React from 'react';
import { Row, Col } from 'antd';
import Thumbnail from 'components/Thumbnail';
import styled from 'styled-components';

const StyledHomePage = styled.div`
  margin: 0.5rem 1rem;
`;

const HomePage = ({ videos }) => {
  const listVideos = (items) =>
    items.map((v) => (
      <Col
        role="listitem"
        xs={{ span: 24 }}
        md={{ span: 12 }}
        lg={{ span: 8 }}
        xl={{ span: 6 }}
        key={v.id.videoId}
      >
        <Thumbnail data={v} />
      </Col>
    ));

  return (
    <StyledHomePage>
      <Row gutter={[16, 22]}>{listVideos(videos)}</Row>
    </StyledHomePage>
  );
};

export default HomePage;
