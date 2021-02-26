import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../config/colors';

const HomeLink = styled(Link)`
  border: none;
  display: inline-block;
  font-size: 1.4rem;
  font-weight: 700;
  padding: 2rem 3rem;
  text-decoration: none;
  margin-top: 2rem;
  background-color: ${colors.orange400};
  color: ${colors.gray100};
  border-radius: ${(props) => props.theme.borderRadiusLg};
  svg {
    font-size: 1.6rem;
    vertical-align: bottom;
    margin-right: 0.5rem;
  }
`;

const Container = styled.section`
  padding: 2rem;
  text-align: center;
`;

export { HomeLink, Container };
