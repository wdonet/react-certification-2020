import React from 'react';
import HeaderBar from '../HeaderBar';
import Content from '../Content';
import { items } from '../../assets/mockdata/mockdata.json';
import VideoCard from '../VideoCard';
import filterByYear from '../../utils/filter';

function App() {
  const recent = filterByYear(items, '');

  const list = recent.map((video) => (
    <VideoCard
      key={video.etag}
      title={video.snippet.title}
      description={video.snippet.description}
      image={video.snippet.thumbnails.high.url}
    />
  ));

  return (
    <React.StrictMode>
      <HeaderBar />
      <Content>{list}</Content>
    </React.StrictMode>
  );
}

export default App;
