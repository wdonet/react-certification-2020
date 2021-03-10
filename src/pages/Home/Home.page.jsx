import React from 'react';
import styled from 'styled-components';

import './Home.styles.css';

import YouTubeCard from '../../components/YouTubeCard/YouTubeCard.component';

import apidata from '../../ApiData/youtube-api.json';

const CardContainer = styled.div`
    margin: 20px;
    position: absolute;
    top: 100px;
    :after {
        content: "";
        display: table;
        clear: both;
    }
`;

function HomePage() {

  function getVideos(theapidata){
    return theapidata.items.map(item => {
      if(item.id.kind === 'youtube#video'){
      return(
        <YouTubeCard 
          key={item.id.videoId}
          title={item.snippet.title}
          description={item.snippet.description}
          image={item.snippet.thumbnails.medium.url} 
        />
      )}
      return null;
    })
  }

  return (
    <>
    <CardContainer>
      {getVideos(apidata)}
    </CardContainer>
    </>

  );
}

export default HomePage;
