import styled from 'styled-components';

const CardContainer = styled.div`
  border-radius: 10px;
  height: 250px;
  width: 250px;
  background-color: ${({ theme }) => theme.background.secondary};
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  padding: 10px;
  overflow: hidden;

  :hover {
    transform: scale(1.1);
  }
`;

const Title = styled.h3`
  color: black;
`;

const Description = styled.p`
  font-size: 14px;
`;

export { CardContainer, Title, Description };
