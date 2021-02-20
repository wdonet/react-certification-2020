import styled from 'styled-components';

const HeaderStyled = styled.header`
  padding: 0 20px 0 20px;
  height: 70px;
  background-color: #f9f9f4;

  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%),
    0px 1px 10px 0px rgb(0 0 0 / 12%);
`;

const HeaderContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
`;
export { HeaderStyled, HeaderContainer };
