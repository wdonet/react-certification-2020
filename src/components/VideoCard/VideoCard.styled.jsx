import styled from 'styled-components';

export const VideoCardContainer = styled.div`
  width: 20em;
  height: 20em;
  margin: 0.75em;
  overflow: hidden;
  background-color: ${(props) => props.theme.videoCardBackground};
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 2px;
  color: ${(props) => props.theme.videoCardTextColor};
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 40%;
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Details = styled.div`
  padding: 1em;

  & h2 {
    font-size: 1rem;
    font-weight: 800;
    margin: 0 0 0.35em 0;
  }

  & p {
    font-size: 0.785rem;
    font-weight: 400;
    margin: 0;
  }
`;
