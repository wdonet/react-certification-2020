import styled from 'styled-components';

const Homepage = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;
const Main = styled.div`
  display: flex;
  flex-direction: column;
  flex: 4;
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

export { Homepage, Main, ContentWrapper };
