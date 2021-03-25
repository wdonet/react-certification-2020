import React, { useContext, useState } from "react";
import styled from "styled-components";
import loginService from '../../services/loginService';
import AppContext from "../../providers/AppContext";
import TextField from "../../ui/TextField/TextField";
import Button from "../../ui/Button/Button";
import { useHistory } from "react-router";

const StyledLogin = styled.div`
    padding: 4px;
    margin: 4px;
    height: min-content;
    width: 400px;
    background: ${ ({theme}) => theme.color.surface };
    color: ${ ({theme}) => theme.color.fontPrimary };
`

const StyledSection = styled.div`
    display: ${({display}) => display ? display : 'grid'};
    height: min-content;
    margin: 8px;
`;

const Login = (props) => {
    const { push } = useHistory();
    const { theme, setUserSession } = useContext(AppContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { onCancel } = props;

    const loginAttempt = async () => {
        const response = await loginService(username, password);
        setUserSession(response);
        push({ pathname: "/home" });
    }

    return (<StyledLogin role="form" theme={theme} data-testid="login-form">
                <StyledSection>Inicia sesión!</StyledSection>
                <StyledSection>
                    <label htmlFor="username">Usuario</label>
                    <TextField 
                        id="username" 
                        name="username"
                        data-testid="username-input"
                        onChange={(uname) => setUsername(uname)}
                    />
                </StyledSection>
                <StyledSection>
                    <label htmlFor="password">Contraseña</label>
                    <TextField 
                        id="password" 
                        name="password"
                        data-testid="password-input"
                        type="password"
                        onChange={(pword) => setPassword(pword)}
                    />
                </StyledSection>
                <StyledSection display="flex">
                    <Button 
                        data-testid="login-button"
                        onClick={loginAttempt}
                    >
                        Ingresar
                    </Button>
                    <Button 
                        data-testid="cancel-button"
                        onClick={() => onCancel && onCancel()}
                    >
                        Cancelar
                    </Button>
                </StyledSection>
            </StyledLogin>);
}

export default Login;