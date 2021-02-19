import styled from 'styled-components';

const HeaderWrapper = styled.div`
  background-color: #1c5476;
  width: 100%;
  position: fixed;
  color: #ffffff;
  top: 0;
  min-height: 64px;
  display: flex;
  align-items: center;
  padding: 0 16px;
`;

const HamburgerButton = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 12px;
  margin-right: 16px;
`;

const RightElements = styled.div`
  display: flex;
  margin-left: auto;

  @media (max-width: 960px) {
    display: none;
  }
`;

export { HeaderWrapper, HamburgerButton, RightElements };
