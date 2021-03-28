import styled from 'styled-components';

const VideoCard = styled.tr`
  width: 100%;
  border: 1px solid #000000;
`;

const Thumbnail = styled.td`
  /*float: left;*/
`;

const Image = styled.img`
  height: 300px;
`;

const VideoInfo = styled.td`
  float: left;
  margin-left: 30px;
`;

const VideoTitle = styled.div`
  text-transform: uppercase;
  font-size: 22px;
  margin-bottom: 15px;
`;

const VideoDescription = styled.div`
  font-size: 16px;
  margin-bottom: 15px;
  color: #6b6b6b;
`;

const VideoDuration = styled.div`
  font-size: 14px;
`;

const Styled = {
  VideoCard,
  Thumbnail,
  Image,
  VideoInfo,
  VideoTitle,
  VideoDescription,
  VideoDuration,
};

export default Styled;
