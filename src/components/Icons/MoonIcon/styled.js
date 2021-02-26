import styled from 'styled-components';

const StyledMoon = styled.svg.attrs((props) => ({
  xmlns: 'http://www.w3.org/2000/svg',
  enableBackground: 'new 0 0 24 24',
  viewBox: '0 0 24 24',
  fill: props.theme.secondary,
  width: `${props.size}px`,
  height: `${props.size}px`,
}))``;

export default StyledMoon;
