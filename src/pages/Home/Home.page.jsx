import React from 'react';
import { Col, Row } from 'react-bootstrap';

import VideoCard from '../../components/VideoCard/Card';

import './Home.styles.css';
import mockData from '../../utils/youtube-videos-mock.json';

function HomePage() {
  const videoItems = mockData.items.map((item) => (
    <Col>
      <VideoCard
        src={item.snippet.thumbnails.high.url}
        key={item.etag}
        title={item.snippet.title}
        description={item.snippet.description}
      />
    </Col>
  ));

  return <Row>{videoItems}</Row>;
}

export default HomePage;
