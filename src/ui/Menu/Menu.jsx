import React, { useContext } from 'react';
import styled from 'styled-components';
import AppContext from '../../providers/AppContext';

const StyledMenu = styled.div`
    position: relative;
    display: inline-block;
`;

const StyledDropdownContent = styled.div`
    display: ${ ({show}) => show ? 'block' : 'none' };
    position: absolute;
    width: max-content;
    padding:4px;
    border-radius: 4px;
    z-index: 1;
    right: ${({right}) => right ? right : 'auto' } ;
    left: ${({left}) => left ? left : 'auto' } ;
    background-color: ${({theme}) => theme.color.surface };
    box-shadow: ${({theme}) => theme.color.surfaceShadow };
`;

const Menu = (props) => {
    const { theme } = useContext(AppContext);
    const { menuButton, children, show, right, left, onClose } = props;

    window.onclick = (event) => {
        const element = document.getElementsByClassName("menu-button");
        if(onClose && event.target !== element[0].firstChild){
            onClose();
        }
    };

    return (<StyledMenu>
        { menuButton && <div className="menu-button">{menuButton}</div> }
        <StyledDropdownContent 
            show={show}
            theme={theme} 
            right={right}
            left={left}
            data-testid="dropdown-content"
        >
            { children }
        </StyledDropdownContent>
    </StyledMenu>);
};

export default Menu;