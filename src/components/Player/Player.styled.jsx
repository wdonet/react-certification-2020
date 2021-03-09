import styled from 'styled-components';

export const ResponsiveIframeContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 80%;
  padding-top: 45%;
  margin: 0 auto;
  margin-top: 25px;

  & iframe {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
`;
