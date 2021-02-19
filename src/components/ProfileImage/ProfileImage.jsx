import React from 'react';
import styled from 'styled-components';

function ProfileImage(props) {
  const Avatar = styled.img`
    width: 3rem;
    height: 3rem;
    margin: 0.5rem;
  `;
  return <Avatar src={props.src} />;
}
export default ProfileImage;
