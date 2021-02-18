import styled from 'styled-components';
import { Card as BoostrapCard, Col, Container } from 'react-bootstrap';

const Img = styled.img`
  width: 100%;
  border-radius: 5px 5px 0 0;
  max-height: 300px;
`;

const StyledCard = styled(BoostrapCard)`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  margin-bottom: 20px;
  align-items: stretch; /*stretches all cards same height*/

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

const StyledContainer = styled(Container)`
  padding: 2px 16px;
`;

const Title = styled.h1`
  font-size: 1.3rem;
  font-family: ${(props) => props.theme.fontFamily};
  font-weight: normal;
  padding-top: 0.8rem;
`;

const Description = styled.p`
  font-size: 1rem;
  font-family: ${(props) => props.theme.fontFamily};
  color: #707070;
`;

const StyledCol = styled(Col)`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const Styled = { Img, StyledCard, StyledContainer, Title, Description, StyledCol };

export default Styled;
