import styled from 'styled-components';
import device from '../../config/device';

const Container = styled.section`
  display: grid;
  flex-direction: column;
  background-color: ${(props) => props.theme.heroBackground};
  border-radius: ${(props) => props.theme.borderRadiusXl};
  margin: 2rem;
  display: grid;
  grid-template-areas:
    'video'
    'recommended';
  overflow: hidden;

  @media ${device.laptop} {
    grid-template-areas: 'video recommended';
    grid-template-rows: calc(100vh - 13rem);
    grid-template-columns: auto 36rem;
  }
`;

const VideoContainer = styled.div`
  border-radius: ${(props) => props.theme.borderRadiusXl};
  background-color: ${(props) => props.theme.cardBackground};
  flex: 1;
  height: 100%;
  overflow: auto;
`;

const VideoPlayer = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border: none;
`;

const VideoPlayerContainer = styled.div`
  border-radius: ${(props) => props.theme.borderRadiusXl};
  position: relative;
  width: 100%;
  overflow: hidden;
  padding-top: 56.25%;
`;

const VideoInfo = styled.div`
  padding: 2rem;
`;

const VideoData = styled.h5`
  color: ${(props) => props.theme.textSecondary};
  display: inline-block;
  + h5 {
    padding-left: 2rem;
    position: relative;
    &::before {
      content: '•';
      position: absolute;
      left: 0.7rem;
    }
  }
`;

const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
`;

const TagListItem = styled.li`
  display: inline-block;
  padding: 0 1rem 1rem 0;
`;

const Tag = styled.button`
  background-color: ${(props) => props.theme.tagSecondaryBackground};
  color: ${(props) => props.theme.tagSecondaryText};
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: ${(props) => props.theme.borderRadiusSm};
  letter-spacing: 0;
  margin: 0;
  text-transform: capitalize;
  line-height: 1.4rem;
`;

const BroadcastContent = styled(Tag)`
  background-color: ${(props) => props.theme.tagBackground};
  color: ${(props) => props.theme.tagText};
  svg {
    vertical-align: bottom;
    font-size: 1.5rem;
    margin-right: 0.2rem;
  }
`;

const RecommendedList = styled.ul`
  padding: 1rem 0;
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
  height: 100%;
`;

const RecommendedItem = styled.li`
  padding: 0.5rem 1rem;
  width: 100%;
  @media ${device.laptop} {
    padding: 1rem 2rem;
  }
`;

const DescriptionTitle = styled.div`
  display: flex;
  align-items: center;
`;
const DescriptionLogo = styled.img`
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  margin-right: 1rem;
`;

const ChannelTitle = styled.h5`
  color: ${(props) => props.theme.cardTitle};
`;

const ChannelSubtitle = styled.h6`
  color: ${(props) => props.theme.textSecondary};
`;

const Description = styled.p`
  margin-top: 1rem;
  color: ${(props) => props.theme.cardSubtitle};
  @media ${device.laptop} {
    padding-left: 5rem;
  }
`;

export {
  Container,
  VideoContainer,
  VideoPlayerContainer,
  VideoPlayer,
  VideoInfo,
  VideoData,
  RecommendedList,
  RecommendedItem,
  TagList,
  TagListItem,
  Tag,
  DescriptionTitle,
  DescriptionLogo,
  Description,
  ChannelTitle,
  ChannelSubtitle,
  BroadcastContent,
};
