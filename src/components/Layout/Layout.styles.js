import styled from 'styled-components';
import colors from '../../config/colors';
import device from '../../config/device';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-areas:
    'header'
    'content'
    'menu';
  grid-template-rows: 8rem auto 7rem;

  @media ${device.laptop} {
    grid-template-areas:
      'header header'
      'menu content';
    grid-template-rows: 9rem auto;
    grid-template-columns: 9rem auto;
  }
`;

const Header = styled.header`
  grid-area: header;
  background-color: ${(props) => props.theme.menuBackground};
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
`;

const HeaderItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderLeft = styled(HeaderItem)`
  justify-content: flex-start;
  @media ${device.laptop} {
    flex-basis: 14rem;
  }
`;

const HeaderCenter = styled(HeaderItem)`
  justify-content: flex-end;
  flex: 1;
  @media ${device.laptop} {
    justify-content: center;
  }
`;

const HeaderRight = styled(HeaderItem)`
  justify-content: flex-end;
  @media ${device.laptop} {
    flex-basis: 8rem;
  }
`;

const Search = styled(HeaderItem)`
  font-size: 2rem;
  position: relative;
  svg {
    color: ${(props) => props.theme.textSecondary};
    z-index: 1;
    @media ${device.laptop} {
      position: absolute;
      left: 1.5rem;
    }
  }
`;

const SearchInput = styled.input`
  position: relative;
  color: ${(props) => props.theme.textSecondary};
  @media ${device.onlySm} {
    border: none;
    margin-left: 1rem;
    width: 100%;
    &:not(:focus) {
      padding: 0;
      margin-left: 0;
      width: 0;
    }
  }
  @media ${device.laptop} {
    padding-left: 5rem;
    width: 300px;
  }
`;

const User = styled(HeaderItem)`
  font-size: 5rem;
  margin-left: 2rem;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
    background-color: ${(props) => props.theme.avatarBackground};
    z-index: 0;
  }
  svg {
    color: ${(props) => props.theme.avatarColor};
    z-index: 1;
  }
`;

const Menu = styled.nav`
  grid-area: menu;
  background-color: ${(props) => props.theme.menuBackground};
  padding: 1rem;
  border-top: 1px solid ${(props) => props.theme.borderColor};
  @media ${device.laptop} {
    border-top: 0;
    border-right: 1px solid ${(props) => props.theme.borderColor};
    padding: 2rem;
  }
`;

const MenuList = styled.ul`
  display: flex;
  justify-content: space-around;
  height: 100%;
  @media ${device.laptop} {
    flex-direction: column;
    justify-content: flex-start;
    border-bottom: 1px solid ${(props) => props.theme.borderColor};
    height: auto;
  }
`;

const MenuItem = styled.li`
  color: ${(props) => (props.active ? colors.gray100 : props.theme.textSecondary)};
  background-color: ${(props) => (props.active ? props.theme.primary : 'transparent ')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 0.5rem;
  width: 5rem;
  height: 5rem;
  margin-bottom: 1rem;
  &:hover {
    background-color: ${(props) => props.theme.primary};
    color: ${colors.gray100};
  }
`;

const MenuIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2rem;
  height: 100%;
  justify-content: space-around;
  ${MenuItem}:hover & {
    color: ${(props) => props.theme.white};
  }
`;

const MainContent = styled.main`
  grid-area: content;
  background-color: ${(props) => props.theme.background};
  overflow-y: auto;
`;

export {
  Container,
  Header,
  HeaderLeft,
  HeaderRight,
  HeaderCenter,
  Search,
  SearchInput,
  User,
  Menu,
  MenuList,
  MenuItem,
  MenuIcon,
  MainContent,
};
