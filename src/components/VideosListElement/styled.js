import styled from 'styled-components';

const ListElement = styled.div`
  width: 100%;
  height: 80px;
  margin: 5px;
`;

const Image = styled.div`
  background-image: url(${(props) => props.img});
  height: 80px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 40%;
  float: left;
  position: relative;
`;

const Detail = styled.div`
  width: 60%;
  float: right;
  position: relative;
`;

const Description = styled.p`
  padding: 0px;
  margin: 0px;
  margin-left: 10px;
  margin-top: 10px;
  font-size: 1rem;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.00938em;
  color: black;
`;

export { ListElement, Image, Detail, Description };
