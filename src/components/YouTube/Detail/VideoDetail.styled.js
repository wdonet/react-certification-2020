import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: white;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  border: solid 2px red;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  border: solid 2px yellow;
  flex: 0;
`;

const ColGrow = styled(Col)`
  flex: 1;
`;

const VideoPlayer = styled.iframe`
  border: solid 2px brown;
`;

const VideoInfo = styled(Col)`
  /* width: 560px; */
`;

const Title = styled.h2`
  font-size: 15px;
  margin: 0;
`;
const Description = styled.p`
  font-size: 13px;
  margin: 0;
`;

const RelatedVideosContainer = styled(ColGrow)``;
const VideoItem = styled(Row)``;

export {
  Container,
  Row,
  Col,
  ColGrow,
  VideoPlayer,
  VideoInfo,
  Title,
  Description,
  RelatedVideosContainer,
  VideoItem,
};
