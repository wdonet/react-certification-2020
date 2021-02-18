import styled from 'styled-components';
import { Row } from 'react-bootstrap';

const CardRow = styled(Row)`
  background-color: ${(props) => props.theme.primaryBackgroundColor};
  padding: 0 20px;
`;

const Styled = { CardRow };
export default Styled;
