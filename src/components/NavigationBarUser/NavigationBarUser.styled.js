import styled from 'styled-components';

const Container = styled.div`
  width: 40px;
  height: 40px;
`;
const UserImage = styled.svg`
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  & > path {
    fill: white;
  }
`;

const Styled = { Container, UserImage };
export default Styled;
