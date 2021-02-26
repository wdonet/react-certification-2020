import styled from 'styled-components';

export const Container = styled.button`
  margin: 10px;
  cursor: pointer;
`;

export const Line = styled.span`
  display: block;
  width: 22px;
  height: 3px;
  margin-bottom: 4px;
  margin-top: 4px;
  position: relative;
  border-radius: 3px;
  background: ${(props) => props.theme.secondary};
`;
