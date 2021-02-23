import styled from 'styled-components';

export const Container = styled.section`
  text-align: center;
  height: 100%;
  width: 40%;
  margin-bottom: 5%;
`;

export const Title = styled.h1`
  font-size: 4rem;
  letter-spacing: -6px;
  font-family: 'fantasy';
  font-weight: normal;

  @media screen and (max-width: 650px) {
    font-size: 3rem;
    letter-spacing: -4px;
  }

  @media screen and (max-width: 425px) {
    font-size: 2rem;
    letter-spacing: -2px;
  }
`;

export const HomeLink = styled.div`
  a.home-link {
    font-size: 1rem;
    text-decoration: none;
    display: block;
    text-align: center;
    padding: 2rem;
    color: black;

    &:before {
      content: '←';
      padding-right: 0.2rem;
      display: inline-block;
    }

    &:hover {
      color: red;
    }
  }
`;
