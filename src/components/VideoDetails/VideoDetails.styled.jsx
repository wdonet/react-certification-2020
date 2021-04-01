import styled from 'styled-components';

export const VideoDetailsContainer = styled.div`
  width: 80%;
  margin: 5px auto 15px;
  text-align: left;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.videoTitleTextColor};
  font-size: 1.8vmax;
  margin: 0;
`;

export const Details = styled.section`
  white-space: pre-line;
  color: ${({ theme }) => theme.videoDetailsTextColor};
  font-size: 1.2vmax;
  margin: 0;
`;
