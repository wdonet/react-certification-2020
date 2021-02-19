import styled from 'styled-components';

const Navbar = styled.div`
  flex: 1;
  background-color: #f4f4f4;
  display: ${props => props.display || 'block'};
  & ul {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    list-style-type: none;
    font-size: 1.3em;
    padding: 0;

    & li {
      border-bottom: 1px #ccc solid;
      padding: 14px;
      text-align: center;
    }
  }
`;

export default Navbar;
