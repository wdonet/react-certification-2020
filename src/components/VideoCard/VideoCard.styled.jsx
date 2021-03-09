import styled from 'styled-components';

export const VideoCardContainer = styled.div`
  width: ${({ noDescription }) => (noDescription ? '14em' : '20em')};
  height: ${({ noDescription }) => (noDescription ? '10em' : '20em')};
  margin: 0.5em;
  overflow: hidden;
  background-color: ${({ theme }) => theme.videoCardBackground};
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 2px;
  color: ${({ theme }) => theme.videoCardTextColor};
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: ${({ noDescription }) => (noDescription ? '60%' : '40%')};
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Details = styled.div`
  padding: 1em;

  & h2 {
    font-size: ${({ noDescription }) => (noDescription ? '0.6rem' : '1rem')};
    text-align: ${({ noDescription }) => (noDescription ? 'center' : 'left')};
    font-weight: 800;
    margin: 0 0 0.35em 0;
  }

  & p {
    font-size: 0.785rem;
    font-weight: 400;
    margin: 0;
  }
`;
