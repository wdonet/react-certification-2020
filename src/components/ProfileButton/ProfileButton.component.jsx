import React from 'react';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ProfileButtonWrapper } from './ProfileButton.styled';

function ProfileButton() {
  return (
    <ProfileButtonWrapper>
      <FontAwesomeIcon icon={faUserCircle} size="2x" />
    </ProfileButtonWrapper>
  );
}

export default ProfileButton;
