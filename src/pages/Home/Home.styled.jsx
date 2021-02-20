import styled from 'styled-components';

const Container = styled.main`
  position: fixed;
  top: 3rem;
  left: 0;

  width: 100%;
  height: calc(100vh - 54px);

  overflow-y: auto;

  padding: 20px 35px;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

export { Container };
