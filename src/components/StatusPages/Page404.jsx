import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { Button } from '../../ui'

const StyledPage404 = styled.div`
    height: 100%;
    width: 100%;
`;

const Page404 = () => {
    const { push } = useHistory();
    return (<StyledPage404>
        Can't find the page you're looking for
        <Button onClick={ () => push({pathname:"/home"}) }>Regresar a home</Button>
    </StyledPage404>);
}

export default Page404;