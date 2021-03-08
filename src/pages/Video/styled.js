import styled from 'styled-components';

const StyledSection = styled.section`
  padding: 30px;
`;

const RelatedVideosContainer = styled.div`
  padding: 0 15px 0 15px;
  display: flex;
  flex-direction: column;
  width: 400px;
  @media (max-width: 900px) {
    width: 350px;
  }
  @media (max-width: 700px) {
    width: 300px;
  }
`;

const VideoPlaterContainer = styled.div`
  float: left;
`;

export { StyledSection, RelatedVideosContainer, VideoPlaterContainer };
