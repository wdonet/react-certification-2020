import styled from 'styled-components';

const HomeViewWrapper = styled.div`
  background-color: #ffffff;
  align-items: center;
  margin-top: 64px;
`;

const HomeViewTitle = styled.h2`
  font-size: 3.75rem;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 300;
  line-height: 1.2;
  letter-spacing: -0.00833em;
  width: 100%;
`;

const HomeViewCardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
  @media (min-width: 601px) and (max-width: 770px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 771px) and (max-width: 1130px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 1131px) and (max-width: 1500px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export { HomeViewWrapper, HomeViewTitle, HomeViewCardContainer };
