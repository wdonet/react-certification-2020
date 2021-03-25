import React from 'react';
import styled from 'styled-components';

const StyledOverlay = styled.div`
    position: fixed;
    display: ${ ({show}) => show ? 'flex':'none' };
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,0.5);
    z-index: 2;
`;

const Overlay = (props) => {
    const { children, show } = props;
    return (<StyledOverlay show={show}>{children}</StyledOverlay>);
}

export default Overlay;