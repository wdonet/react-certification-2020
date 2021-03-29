import React, { useContext } from 'react';
import VideoCardContainer from '../GenericComponents/VideoCardContainer';
import styled from 'styled-components';
import { useHistory } from 'react-router'
import AppContext from '../../providers/AppContext';

const StyledWarn = styled.div`
  padding: 4px;
  border: 1px solid;
  border-color: orange;
  border-radius: 4px;
  height: min-content;
  background-color: gray;
  color: white;
`;

const NoVideosNotice = <StyledWarn data-testid="no-videos-available">There are no videos</StyledWarn>; 

const HomeVideos = () => {
  const { videosList } = useContext(AppContext);
  const { push } = useHistory();

  return (<VideoCardContainer 
            videosList={videosList}
            noVideosNotice={NoVideosNotice}
            onClick={
              (video) => push({
                pathname: `/player`,
                search: `?id=${video.id.videoId}`,
                state: video,
              })
            }/>);
};

export default HomeVideos;
