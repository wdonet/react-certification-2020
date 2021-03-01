import styled from 'styled-components';
import device from '../../config/device';

const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  position: relative;
  svg {
    color: ${(props) => props.theme.textSecondary};
    z-index: 1;
    position: absolute;
    left: 1.5rem;
    @media ${device.laptop} {
    }
  }
`;

const SearchInput = styled.input`
  position: relative;
  color: ${(props) => props.theme.textSecondary};
  padding-left: 5rem;

  @media ${device.onlySm} {
    border-color: ${(props) =>
      props.isSearchActive ? props.theme.borderColor : 'transparent'};
    padding-right: ${(props) => (props.isSearchActive ? '1.5rem' : '0')};
    padding-left: ${(props) => (props.isSearchActive ? '5rem' : '3rem')};
    width: ${(props) => (props.isSearchActive ? '100%' : '0')};
    &:focus {
      padding-right: 1.5rem;
      padding-left: 5rem;
      width: 100%;
    }
  }
  @media ${device.laptop} {
    width: 300px;
  }
`;

export { Search, SearchInput };
