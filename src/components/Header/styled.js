import styled from 'styled-components';

export const Container = styled.nav`
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  padding: 8px 30px;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.main};
  color: ${(props) => props.theme.secondary};

  @media (max-width: 768px) {
    padding: 8px 15px;
  }
`;

export const SubContainerLeft = styled.div`
  display: flex;
  align-items: center;
  padding: 0;
  height: 100%;
  width: 350px;
  position: relative;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const SubContainerRight = styled.div`
  width: 180px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    display: none;
  }
`;
