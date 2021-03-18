import styled from 'styled-components';

export const Container = styled.div`
  border-bottom: 1px solid #cccccc;
  border-radius: 5px;
  padding: 20px;
  text-align: left;
  :hover {
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.text};
  }
`;

export const Title = styled.div`
  color: ${(props) => props.theme.textcolor};
`;
