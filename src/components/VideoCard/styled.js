import styled from 'styled-components';

const CardContainer = styled.li`
  background-color: ${({ theme }) => theme.background.secondary};
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  overflow: hidden;

  :hover {
    transform: scale(1.1);
  }
`;

const VideoImg = styled.img`
  width: 100%;
`;

const VideoDetails = styled.div`
  padding: 0.5em;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const ChannelLogo = styled.img``;

const Title = styled.p`
  margin: 0px;
  font-size: 0.9em;
  color: ${({ theme }) => theme.font.primary};
  font-weight: 600;
  text-align: left;
`;

const Description = styled.p`
  font-size: 0.8em;
  text-align: left;
  color: ${({ theme }) => theme.font.secondary};
  margin: 8px;
  font-weight: 500;
`;

export {
  CardContainer,
  VideoDetails,
  Title,
  Description,
  VideoImg,
  TitleContainer,
  ChannelLogo,
};
