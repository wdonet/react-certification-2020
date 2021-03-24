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
    height: 400px;
    width: 400px;
    background: ${ ({theme}) => theme.color.surface };
    color: ${ ({theme}) => theme.color.fontPrimary };
`

const StyledSection = styled.div`
    display: grid;
    height: min-content;
`;

const Login = () => {
    const { push } = useHistory();
    const { theme, setUserSession } = useContext(AppContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

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
                        onChange={(username) => setUsername(username)}
                    />
                </StyledSection>
                <StyledSection>
                    <label htmlFor="password">Usuario</label>
                    <TextField 
                        id="password" 
                        name="password"
                        data-testid="password-input"
                        type="password"
                        onChange={(password) => setPassword(password)}
                    />
                </StyledSection>
                <StyledSection>
                    <Button 
                        data-testid="login-button"
                        onClick={loginAttempt}
                    >
                        Ingresar
                    </Button>
                </StyledSection>
            </StyledLogin>);
}

export default Login;