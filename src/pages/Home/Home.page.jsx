import React, { useRef } from 'react';
import {useVideoSearch} from '../../providers/VideoSearch';
import Card from '../../components/Card';
import VideoDetailsView from '../../components/VideoDetailsView';
import Styled from "./styled";
import {API_KEY} from '../../utils/constants';
import YTSerach from 'youtube-api-search';

const HomePage = () => {

  const {
    search,
    items,
    selectedVideo,
    setSelectedVideo,
    setRelatedVideos
  } = useVideoSearch();
  
  const handleVideoSelected = (video) => {
    setSelectedVideo(video);
    YTSerach({key: API_KEY, relatedToVideoId: selectedVideo.id.videoId, maxResults: 4 },function(rVideos){
        setRelatedVideos(rVideos);
    } );
    
  };
  
  const sectionRef = useRef(null);

  return (
    <section className="homepage" ref={sectionRef}>
      <Styled.Title >Welcome to the Challenge!</Styled.Title>
          <Styled.HomeGrid> 
          {  search!="" &&
            <VideoDetailsView />
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
