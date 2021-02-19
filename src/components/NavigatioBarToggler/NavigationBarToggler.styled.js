import styled from 'styled-components';

const TogglerButton = styled.button`
  border: solid 1px white;
  color: white;
  height: 100%;
  &:focus {
    box-shadow: 0 0 0 0.05rem;
  }
  & > svg {
    vertical-align: unset;
  }
`;

const Styled = { TogglerButton };
export default Styled;
