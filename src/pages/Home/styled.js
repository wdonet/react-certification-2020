import styled from 'styled-components';

const Welcome = styled.div`
  color: ${({ theme }) => theme.text};
  flex-wrap: wrap;
  align-content: center;
  width: 100%;
  text-align: -webkit-center;
  padding-top: 30px;
  font-size: 40px;
  background-color: ${({ theme }) => theme.content};
`;

export { Welcome };
