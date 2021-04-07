import styled from 'styled-components';

const StyledSection = styled.section`
  padding: 30px;
  display: flex;
  justify-content: space-around;
`;

const RelatedVideosContainer = styled.div`
  padding: 15px;
  background-color: ${({ theme }) => theme.background.secondary};
  box-shadow: 0px 1px 10px 0px rgb(0 0 0 / 12%);
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

const VideoPlayerContainer = styled.div`
  width: 60%;
  background-color: ${({ theme }) => theme.background.secondary};
  box-shadow: 0px 1px 10px 0px rgb(0 0 0 / 12%);
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const RelatedVideoTitle = styled.p`
  margin: 10px 0 20px 5px;
  font-size: 1.4em;
  font-weight: 400;

  color: ${({ theme }) => theme.font.secondary};
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MainVideoTitle = styled.p`
  font-size: 1.5em;
  font-weight: 400;

  color: ${({ theme }) => theme.font.primary};
`;

const MainVideoDescription = styled.p`
  font-size: 0.8em;
  color: ${({ theme }) => theme.font.secondary};
`;

export {
  StyledSection,
  RelatedVideosContainer,
  VideoPlayerContainer,
  RelatedVideoTitle,
  MainVideoTitle,
  MainVideoDescription,
  TitleContainer,
};
