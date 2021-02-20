import styled from 'styled-components';

const Title = styled.h1`
  text-align: center;
  font-size: 30px;
`;
const VideosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-self: center;
  max-width: 1400px;
`;

const VideoCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  border: 1px solid gray;
  width: 250px;
  height: 280px;
  margin: 10px;
`;

const VideoPreview = styled.img``;

const VideoTitle = styled.h2`
  font-size: 15px;
  margin: 5px 0;
`;

const VideoDescription = styled.p`
  font-size: 11px;
  margin: 0;
`;

export { Title, VideosContainer, VideoCard, VideoPreview, VideoTitle, VideoDescription };
