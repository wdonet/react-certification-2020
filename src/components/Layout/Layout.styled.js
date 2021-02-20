import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100vw;
  height: 100vh;
  background-color: lightgray;
  /* background-color: #0f0f0f;  */
`;

const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
  align-items: stretch;
`;

export { MainContainer, Content };
