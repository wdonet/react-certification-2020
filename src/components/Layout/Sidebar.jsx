import React, { useContext } from 'react';
import styled from 'styled-components';
import AppContext from '../../providers/AppContext';
import { IconWrapper } from '../../ui';
import closeIcon from '../../assets/icons/close_icon.png';

const StyledSidebar = styled.div`
    height: 100%;
    width: 250px;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    overflow-x: hidden;
    background: ${({theme}) => theme.color.surface };
    color: ${({theme}) => theme.color.fontPrimary };
`;

const StyledTitleSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 4px;
`;

const StyledChildrenSection = styled.div`
  margin-top: 8px;
`;

const Sidebar = (props) => {
    const { theme } = useContext(AppContext);
    const { children, onClose, title } = props;
    return (<StyledSidebar 
                data-testid="sidebar" 
                theme={theme}
            >
              <StyledTitleSection>
                { title && title }
                <IconWrapper 
                  alt="close" 
                  src={closeIcon} 
                  role="button"
                  onClick={ () => onClose && onClose() }
                />
              </StyledTitleSection>
              <StyledChildrenSection>
                { children }
              </StyledChildrenSection>
            </StyledSidebar>);
}

export default Sidebar;