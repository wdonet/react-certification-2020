import styled from 'styled-components';

const Container = styled.div.attrs((props) => {
  const s = props.videoDetail
    ? 'col-4'
    : 'row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4';
  return { className: s };
})`
  margin-top: 30px;
  margin-bottom: 30px;
`;
const TogglerButton = styled.button`
  background-color: #fff;
`;

const Styled = { Container, TogglerButton };
export default Styled;
