import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid #cccccc;
  border-radius: 5px;
  padding: 20px;
  background-color: rgba(230, 90, 232, 0.2);
  min-width: 350px;
  width: 25%;
  display: inline-block;
  height: 500px;

  &:hover {
    cursor: pointer;
  }

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;
const TitleBar = styled.div`
  height: 85px;
`;

const Title = styled.h2`
  margin-top: 5px;
  font-size: 1em;

  ${Container}:hover & {
    font-size: 1.2em;
  }
`;

const Content = styled.div``;

const Thumbnail = styled.img`
  width: 70%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  border-radius: 8px;
`;

const Description = styled.p`
  opacity: 0.8;

  &:first-child {
    font-style: italic;
  }
`;

const Styled = { Container, Title, TitleBar, Content, Thumbnail, Description };
export default Styled;
