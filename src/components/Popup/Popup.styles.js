import styled from 'styled-components';

const PopupContainer = styled.div`
  z-index: 101;
  position: absolute;
  top: 100%;
  right: 0;
  overflow: hidden;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: ${(props) => props.theme.borderRadiusLg};
  background-color: ${(props) => props.theme.menuBackground};

  animation-timing-function: ease;
  animation-duration: 300ms;
  animation-fill-mode: forwards;

  animation-name: ${({ state }) => {
    switch (state) {
      case 'entering':
        return 'popup-animation-enter';
      case 'exiting':
        return 'popup-animation-exit';
      default:
        return '';
    }
  }};
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 20%);

  transition: ${(props) => props.theme.transitionDefault};
  opacity: ${({ state }) => {
    switch (state) {
      case 'entering':
      case 'entered':
        return '1';
      default:
        return '0';
    }
  }};
  z-index: 100;
`;

export { PopupContainer, Backdrop };
