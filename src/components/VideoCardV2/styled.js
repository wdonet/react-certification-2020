import styled from 'styled-components';

const VideoContainer = styled.div`
  display: flex;
  margin: 0 0 10px 0;
`;

const VideoImage = styled.img`
  float: left;
  width: 40%;
`;

const Title = styled.p`
  margin: 0;
  font-size: 0.8em;
  font-weight: 600;
  color: ${({ theme }) => theme.font.primary};
`;

const VideoDetails = styled.div`
  padding: 5px;
`;

const Details = styled.p`
  font-size: 0.8em;
`;

export { VideoContainer, VideoImage, Title, VideoDetails, Details };
