import styled from 'styled-components';

export const Card = styled.div`
  width: 100%;
`;

export const CardImg = styled.div`
  background-image: url(${(props) => props.img});
  height: 180px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const CardContent = styled.div`
  padding: 2px 16px;
  overflow: hidden;
  flex-wrap: wrap;
`;

export const CardTitle = styled.div`
  color: black;
  margin: 0px;
  font-size: 22px;
`;

export const CardDescription = styled.div`
  color: black;
  margin: 0px;
  height: 100px;
  word-wrap: break-word;
  font-size: 15px;
`;

const Styled = {
  Card,
  CardImg,
  CardContent,
  CardTitle,
  CardDescription,
};
export default Styled;
