import styled from 'styled-components';

const Card = styled.div`
  width: 100%;
`;

const CardImg = styled.div`
  background-image: url(${(props) => props.img});
  height: 180px;
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const CardContent = styled.div`
  padding: 2px 16px;
  overflow: hidden;
  flex-wrap: wrap;
`;

const CardTitle = styled.div`
  color: black;
  margin: 0px;
  font-size: 22px;
`;

const CardDescription = styled.div`
  color: black;
  margin: 0px;
  height: 100px;
  word-wrap: break-word;
  font-size: 15px;
`;

export { Card, CardImg, CardContent, CardTitle, CardDescription };
