import styled from 'styled-components';

const SvgWrapper = styled.svg`
  display: inline-block;
  color: ${({ color, theme }) => (color ? theme.colors[color] : theme.label)};
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  fill: ${({ color, theme }) => (color ? theme.colors[color] : theme.label)};
  font-size: 1.5rem;
  user-select: none;
  flex-shrink: 0;
`;

export { SvgWrapper };
