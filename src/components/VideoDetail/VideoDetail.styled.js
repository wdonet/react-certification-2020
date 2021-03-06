import styled from 'styled-components';

const Container = styled.div.attrs((props) => {
  const s = props.videoDetail ? 'col-8' : '';
  return { className: s };
})``;
const VideoContainer = styled.div`
  width: 100%;
  min-height: 480px;
`;
const VideoiFrame = styled.iframe`
  width: 100%;
  min-height: 480px;
`;
const VideoTitle = styled.h3``;
const VideoDescription = styled.p``;

const Styled = { Container, VideoContainer, VideoiFrame, VideoTitle, VideoDescription };
export default Styled;
