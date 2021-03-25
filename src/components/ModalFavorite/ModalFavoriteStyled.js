import styled from 'styled-components';

const ModalFavorite = styled.div`
  width: 30%;
  height: 100%;
  background-color: white;
  left: 0;
  top: 0px;
  display: block;
  position: fixed;
  z-index: 1;
  overflow: auto;
`;

const MenuContent = styled.div`
  padding: 10px;
  height: 50px;
  border-bottom-style: solid;
  border-bottom-color: #e6e6e6;
`;

const SpanMenu = styled.span`
  color: black;
  font-size: 1rem;
  font-weight: 400;
`;

const Styled = { ModalFavorite, SpanMenu, MenuContent };
export default Styled;
