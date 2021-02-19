import styled from 'styled-components';

const CardWrapper = styled.div`
  border-radius: 4px;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  height: 345px;
  margin: 10px;
  overflow: hidden;
  width: 345px;
`;

const CardButton = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  outline: inherit;
`;

const CardImage = styled.img`
  width: 100%;
  height: 140px;
  object-fit: cover;
`;

const CardBody = styled.div`
  text-align: start;
  padding: 16px;
`;

const CardTitle = styled.div`
  font-size: 20px;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 500;
  line-height: 1.6;
  letter-spacing: 0.0075em;
`;

const CardDescription = styled.p`
  font-size: 14px;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  line-height: 1.43;
  letter-spacing: 0.01071em;
  color: rgba(0, 0, 0, 0.54);
`;

export { CardWrapper, CardButton, CardImage, CardBody, CardTitle, CardDescription };
