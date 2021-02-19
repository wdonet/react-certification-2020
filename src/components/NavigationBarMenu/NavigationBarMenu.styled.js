import styled from 'styled-components';

const Container = styled.div``;
const Content = styled.div`
  @media (max-width: 768px) {
    align-items: flex-end;
    flex-flow: column-reverse;
  }
`;

const Styled = { Container, Content };
export default Styled;
