import styled from 'styled-components';

const Container = styled.nav`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 3rem;

  background-color: ${({ theme }) => theme.background};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid #eaeaea;
`;

const Logo = styled.img`
  width: 30px;
  height: 30px;
  margin: 5px;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  flex-grow: 1;
`;

const LogoName = styled.h2`
  font-size: 1.3rem;
  margin: 0;
`;

const SearchContainer = styled.div`
  flex-grow: 1;
`;
const AvatarContainer = styled.div`
  flex-grow: 1;
  margin-right: 5px;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export { Container, Logo, LogoContainer, LogoName, SearchContainer, AvatarContainer };
