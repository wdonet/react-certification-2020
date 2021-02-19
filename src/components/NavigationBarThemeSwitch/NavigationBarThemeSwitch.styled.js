import styled from 'styled-components';

const Container = styled.div`
  margin-right: 20px;
  margin-left: 20px;
  margin-top: 8px;
  @media (max-width: 768px) {
    margin-right: 0;
    margin-left: 0;
    margin-top: 10px;
  }
`;
const Content = styled.div``;
const Label = styled.label``;
const Input = styled.input``;

const Styled = { Container, Content, Label, Input };
export default Styled;
