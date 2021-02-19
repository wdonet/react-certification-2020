import styled from 'styled-components';

const WrapperVideo = styled.div`
  border-radius: 5px;
  width: 100%;
  flex: 1 1 0%;
  display: flex;
  flex-flow: row wrap;

  &:not(:last-child) {
    margin-bottom: 35px;
  }
`;

const VideoDisplay = styled.div`
  line-height: 1.6;
  align-items: center;
  width: auto;
  padding-left: 35px;
  padding-right: 35px;
`;

const Title = styled.div`
  font-weight: 700;
  text-align: justify;
`;

const Info = styled.div`
  align-items: center;
  max-height: 180px;
  max-width: 320px;
`;

const Description = styled.div`
  font-size: 14px;
  text-align: justify;
`;

const Url = styled.div`
  max-height: 180px;
  max-width: 320px;
  overflow: hidden;
  align-items: center;
`;

const Styled = { WrapperVideo, Title, Url, Description, Info, VideoDisplay };
export default Styled;
