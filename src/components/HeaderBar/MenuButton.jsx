import React, { useState } from 'react';
import styled from 'styled-components';
import LeftNav from '../LeftNav';
import { StoreContext } from '../../contexts/Store';

const StyledMenuButton = styled.nav`
  width: 2rem;
  height: 2rem;
  position: relative;
  top: 15px;
  left: 20px;
  z-index: 20;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  color: white;

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? '#ccc' : '#333')};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

const MenuButton = () => {
  const {
    ["menuOpen"]: [menuOpen, setMenuOpen]
  } = React.useContext(StoreContext);

  return (
    <>
      <StyledMenuButton open={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
        <div />
        <div />
        <div />
      </StyledMenuButton>
      <LeftNav open={menuOpen} />
    </>
  );
};

export default MenuButton;
