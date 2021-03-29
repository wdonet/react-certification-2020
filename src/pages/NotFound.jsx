import React from 'react';
import styled from 'styled-components';
import {
  Link
} from "react-router-dom";

const StyledNotFound = styled.div`
  padding:50px;
`

const NotFound = () => (
  <StyledNotFound>
    <h1>404 - Not Found!</h1>
    <Link to="/">
      Go Home
    </Link>
  </StyledNotFound>
);

export default NotFound;