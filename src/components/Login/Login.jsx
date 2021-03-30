import React, { useContext, useState } from "react";
import styled from "styled-components";
import loginService from '../../services/loginService';
import AppContext from "../../providers/AppContext";
import TextField from "../../ui/TextField/TextField";
import Button from "../../ui/Button/Button";
import { useHistory } from "react-router";

const StyledLogin = styled.div`
    border-radius: 8px;
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
    const [error, setError] = useState(null);
    const { onCancel } = props;

    const cleanUp = () => {
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
        setError("");
    }

    const loginAttempt = async () => {
        try{
            setError(null);
            const response = await loginService(username, password);
            cleanUp();
            setUserSession(response);
            push({ pathname: "/home" });
            onCancel && onCancel();
        }catch(error){
            cleanUp();
            setError(error.message);
        }
    }

    return (<StyledLogin role="form" theme={theme} data-testid="login-form">
                <StyledSection>Login!</StyledSection>
                <StyledSection>
                    <label htmlFor="username">User</label>
                    <TextField 
                        id="username" 
                        name="username"
                        data-testid="username-input"
                        onChange={(uname) => setUsername(uname)}
                    />
                </StyledSection>
                <StyledSection>
                    <label htmlFor="password">Password</label>
                    <TextField 
                        id="password" 
                        name="password"
                        data-testid="password-input"
                        type="password"
                        onChange={(pword) => setPassword(pword)}
                    />
                </StyledSection>
                <StyledSection>
                <span style={{color:'red'}}>{ error }</span>
                </StyledSection>
                <StyledSection display="flex">
                    <Button 
                        data-testid="login-button"
                        onClick={loginAttempt}
                        margin="4px"
                        height="30px"
                    >
                        Login
                    </Button>
                    <Button 
                        data-testid="cancel-button"
                        onClick={() => onCancel && onCancel()}
                        margin="4px"
                        height="30px"
                    >
                        Cancel
                    </Button>
                </StyledSection>
            </StyledLogin>);
}

export default Login;