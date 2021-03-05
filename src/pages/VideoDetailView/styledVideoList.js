import styled from 'styled-components';

const VideoRightList = styled.div`
  display: flex;
  flex-direction: column;
  float: right;
  width: 30%;
  height: 100%;
  overflow: scroll;
`;

const VideoCardtList = styled.div`
  width: 100%;
  display: flex;
  height: 100px;
  margin-top: 10px;
  border-bottom: solid 1px #dcdcdc;
`;

const ImgRightList = styled.img`
  width: 120px;
  height: 90px;
`;

const Title = styled.div`
  width: 100%;
  font-size: 1rem;
  font-weight: 400;
  text-align: justify;
  line-height: 1.5;
  padding: 5px;
`;

const DisplayVideoLeftFrame = styled.div`
  width: 100%;
`;

const TitleVideoDetail = styled.h3`
  text-align: left;
  margin-left: 20px;
`;

const Styled = {
  VideoRightList,
  ImgRightList,
  Title,
  VideoCardtList,
  DisplayVideoLeftFrame,
  TitleVideoDetail,
};
export default Styled;
