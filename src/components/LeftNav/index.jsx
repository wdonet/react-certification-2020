import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  flex-flow: column nowrap;
  background-color: #0d2538;
  position: fixed;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  top: 0;
  left: 0;
  height: 100vh;
  width: 300px;
  padding-top: 3.5rem;
  transition: transform 0.3s ease-in-out;
  z-index: 1;
  li {
    color: #fff;
    padding: 18px 10px;
  }
`;

const LeftNav = ({ open }) => {
  return (
    <Ul open={open}>
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Sign In</li>
        <li>Sign Up</li>
      </ul>
    </Ul>
  );
};

export default LeftNav;
