import React, {useContext} from 'react';
import { useHistory } from 'react-router';
import AppContext from '../../providers/AppContext';
import styled from 'styled-components';
import { Button } from '../../ui'

const StyledPage404 = styled.div`
    align-content: center;
    justify-content: center;
    display: grid;
    height: 100vh;
    width: 100vh;
    background: ${({theme}) => theme.color.surface}; 
    color: ${({theme}) => theme.color.fontPrimary};
`;

const Page404 = () => {
    const { push } = useHistory();
    const { theme } = useContext(AppContext);
    return (<StyledPage404 theme={theme}>
        Can&lsquo;t find the page you&lsquo;re looking for
        <Button onClick={ () => push({pathname:"/home"}) }>Regresar a home</Button>
    </StyledPage404>);
}

export default Page404;