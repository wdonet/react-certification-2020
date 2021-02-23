import styled from 'styled-components';

export const MainContainer = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

const MenuContainer = styled.div`
  a.item {
    display: none !important;
  }

  border: 1px solid rgba(34, 36, 38, 0.1);
`;

export const SessionContainer = styled(MenuContainer)`
  a.item {
    @media (max-width: 430px) {
      display: block !important;
    }
  }
`;

export const ThemeModeContainer = styled(MenuContainer)`
  a.item {
    @media (max-width: 630px) {
      display: block !important;
    }
  }
`;
