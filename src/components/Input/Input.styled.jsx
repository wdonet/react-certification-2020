import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  padding: 5px;
`;

const Inner = styled.div`
  display: flex;
  width: 100%;
`;

const InputIcon = styled.div`
  padding: 0 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WrapperInput = styled.div`
  flex-grow: 1;
  margin-right: 1px;
`;

const TrayInput = styled.div`
  position: relative;
`;

const InputStyle = styled.input`
  padding: 5px 10px;
  margin: 2px;
  border: 2px solid transparent;
  background-color: transparent;
  height: 2rem;
  width: 100%;
  background-clip: padding-box;
  appearance: none;
  font-family: 'Roobert', sans-serif;

  border-radius: 8px;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.inputHoverBorder};
    background-color: ${({ theme }) => theme.inputHoverBg};
  }
`;

export { Container, Inner, InputIcon, WrapperInput, TrayInput, InputStyle };
