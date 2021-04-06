import styled from 'styled-components';

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
  width: 250px;
  margin: 10px;
  border: 1px solid lightgray;
  &:hover {
    background: lightgray;
    ${({ theme }) => (theme.primary ? `background-color: ${theme.primary}` : '')};
  }
`;

const VideoPreview = styled.img``;

const VideoContent = styled.div`
  padding: 10px;
`;

const VideoTitle = styled.h2`
  font-size: 15px;
  margin: 5px 0;
`;

const VideoDescription = styled.p`
  font-size: 11px;
  margin: 0;
`;

export {
  VideosContainer,
  VideoCard,
  VideoPreview,
  VideoContent,
  VideoTitle,
  VideoDescription,
};
