import React, { useRef, useState, useEffect } from 'react';
import Card from '../../components/Card';
import VideoDetailsView from '../../components/VideoDetailsView';
import Styled from "./styled";
import YTSerach from 'youtube-api-search';
//import mockedData from "../../youtube-videos-mock.json";

const API_KEY="AIzaSyDWAKbVGVJgvjZXbzZbrfFHNSrp4JElfzE";

const HomePage = ({ search }) => {
  const [items, setItems] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState({
    id : { 
      videoId : "" 
    },
    snippet : { 
      title : "",
      description : "",
    }
  });
  
  useEffect(() => {
    if(search!=''){
      YTSerach({key: API_KEY, term: search, maxResults: 5 },function(videos){
        setItems(videos);
        setSelectedVideo(videos[0]);
      } );
    }
  }, [search]);
  
  const handleVideoSelected = (video) => {
    console.log(video);
    setSelectedVideo(video);
  };
  
  //const { items } = mockedData;
  const sectionRef = useRef(null);

  return (
    <section className="homepage" ref={sectionRef}>
      <Styled.Title >Welcome to the Challenge!</Styled.Title>
          <Styled.HomeGrid> 
          {  search!="" &&
            <VideoDetailsView 
              selectedVideo={selectedVideo}
              handleVideoSelected={handleVideoSelected}
            />
          }
          {items.map((item) => {
            return (
              <Card 
                key={item.etag}
                handleVideoSelected={handleVideoSelected}
                video={item}
              />
              );
          })}

          </Styled.HomeGrid>

    </section>
  );
}

export default HomePage;
