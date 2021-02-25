import React from 'react';
import styled from 'styled-components';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const StyledAvatar = styled.div`
  height: 100%;
  vertical-align: middle;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 40em) {
    display: none;
  }
`;
function Avatar() {
  return (
    <StyledAvatar>
      <AccountCircleIcon fontSize="large" />
    </StyledAvatar>
  );
}

export default Avatar;
