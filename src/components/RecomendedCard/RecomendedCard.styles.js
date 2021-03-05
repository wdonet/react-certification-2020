import { Link } from 'react-router-dom';
import styled from 'styled-components';
import device from '../../config/device';

const Card = styled(Link)`
  background-color: ${(props) => props.theme.cardBackground};
  border-radius: ${(props) => props.theme.borderRadiusLg};
  text-decoration: none;
  overflow: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  @media ${device.laptop} {
    flex-direction: column;
  }
  a {
    text-decoration: none;
  }
`;

const Header = styled.div`
  position: relative;
  max-width: 50%;
  @media ${device.laptop} {
    max-width: 100%;
  }
  img {
    height: 15rem;
    width: 100%;
    object-position: center;
    object-fit: cover;
  }
`;
const Content = styled.div`
  text-align: left;
  padding: 1rem;
  max-width: 50%;
  @media ${device.laptop} {
    max-width: 100%;
    padding: 2rem;
  }
`;

const Tag = styled.h6`
  background-color: ${(props) => props.theme.tagBackground};
  color: ${(props) => props.theme.tagText};
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: ${(props) => props.theme.borderRadiusSm};
  letter-spacing: 0;
  margin: 0;
  text-transform: capitalize;
  line-height: 1.4rem;
  position: absolute;
  top: 1rem;
  left: 1rem;
  svg {
    vertical-align: bottom;
    font-size: 1.5rem;
    margin-right: 0.2rem;
  }
`;

const Title = styled.h5`
  color: ${(props) => props.theme.cardTitle};
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  @media ${device.laptop} {
    -webkit-line-clamp: 2;
  }
`;

const Subtitle = styled.h6`
  color: ${(props) => props.theme.cardSubtitle};
  font-weight: 400;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  @media ${device.laptop} {
    -webkit-line-clamp: 1;
  }
`;

export { Card, Header, Content, Tag, Title, Subtitle };
