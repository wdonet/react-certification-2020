import React from 'react';
import { Container } from './Avatar.styled';
import HappyFaceIcon from '../../ui/icons/HappyFace';

const Avatar = ({ clickable }) => {
  return (
    <Container clickable={clickable}>
      <HappyFaceIcon color="white" />
    </Container>
  );
};

export default Avatar;
