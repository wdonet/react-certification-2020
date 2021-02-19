import styled from 'styled-components';

const Container = styled.div`
  width: 320px;
  height: 350px;
  background-color: #fff;
  margin: 15px;
  padding-bottom: 15px;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: rgb(0 0 0 / 20%) 2px 2px 9px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Title = styled.h2`
  margin: 13px;
  font-size: 1.1em;
  letter-spacing: 1px;
  color: #676767;
  text-align: left;
`;

const Description = styled.p`
  margin: 15px;
  font-size: 0.9em;
  color: #8f8f8f;
  line-height: 1.4em;
  text-align: left;
`;

const VideoCardStyled = {
  Container,
  Image,
  Title,
  Description,
};

export default VideoCardStyled;
