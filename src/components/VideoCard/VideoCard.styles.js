import styled from 'styled-components';

const Card = styled.div`
  background-color: ${(props) => props.theme.cardBackground};
  border-radius: ${(props) => props.theme.borderRadiusLg};
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

const Header = styled.div`
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
  svg {
    vertical-align: bottom;
    font-size: 1.5rem;
    margin-right: 0.2rem;
  }
`;

const Title = styled.h4`
  color: ${(props) => props.theme.cardTitle};
`;
const Subtitle = styled.h5`
  color: ${(props) => props.theme.cardSubtitle};
`;
const Text = styled.p`
  color: ${(props) => props.theme.cardText};
  font-size: 1.2rem;
  margin: 0;
`;

export { Card, Header, Content, Tag, Title, Subtitle, Text };
