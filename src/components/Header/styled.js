import styled from 'styled-components';

const HeaderPanel = styled.div`
  background-color: #e93d44;
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 6px 20px;

  & .toggle-button {
    background-color: #e93d44;
    border: 1px #ffffff solid;
    color: #ffffff;
  }

  & .ui.toggle {
    & label {
      color: #ffffff;
    }
  }
`;

const SearchInput = styled.input`
  border-radius: 8px;
  border: 1pt #f77529 solid;
  flex: 1;
  padding: 10px;
`;

const ControlPanel = styled.div`
  display: flex;
  flex: 2;
  justify-content: flex-end;

@media only screen and (max-width: 640px) {
  display: none;
`;

const Toggle = styled.div`
  padding: 8px;
`;

export { HeaderPanel, SearchInput, ControlPanel, Toggle };
