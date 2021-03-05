import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../config/colors';
import device from '../../config/device';

const Container = styled.section`
  text-align: center;
  margin: 0 auto;
  padding: 2rem;
  width: 100%;
  /*   laptop: 1024,
  laptopLg: 1440,
  desktop: 1600, */

  @media ${device.laptop} {
    width: 991px;
  }
  @media ${device.laptopLg} {
    width: 1200px;
  }
`;

const ButtonLink = styled(Link)`
  border: none;
  display: inline-block;
  font-size: 1.4rem;
  font-weight: 700;
  padding: 2rem 3rem;
  text-decoration: none;
  margin: 2rem;
  background-color: ${colors.orange400};
  color: ${colors.gray100};
  border-radius: ${(props) => props.theme.borderRadiusLg};
  svg {
    font-size: 1.6rem;
    vertical-align: bottom;
    margin-right: 0.5rem;
  }
`;

export { ButtonLink, Container };
