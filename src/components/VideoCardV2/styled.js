import styled from 'styled-components';

const VideoImage = styled.img`
  float: left;
  width: 30%;
`;

const Title = styled.p`
  font-size: 0.9em;
  font-weight: 600;
  color: ${({ theme }) => theme.font.primary};
`;

const VideoDetails = styled.div`
  padding: 5px;
`;

const Details = styled.p`
  font-size: 0.8em;
`;

export { VideoImage, Title, VideoDetails, Details };
