import styled from 'styled-components';

const HeaderContainer = styled.div`
  background-color: ${({ theme }) => theme.background.secondary};
  padding: 10px 0 10px 0;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%),
    0px 1px 10px 0px rgb(0 0 0 / 12%);
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 900px) {
    height: 60px;
  }
  @media (max-width: 700px) {
    height: 50px;
  }
  @media (max-width: 400px) {
    height: 40px;
  }
`;

const LeftItems = styled.div`
  text-align: left;
`;

const CenterItems = styled.div`
  text-align: center;
  width: 40%;
`;

const RightItems = styled.div`
  text-align: right;
`;

const ToggleContainer = styled.span`
  height: 100%;
`;

export { HeaderContainer, LeftItems, CenterItems, RightItems, ToggleContainer };
