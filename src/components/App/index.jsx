import React from 'react';
import Theme from "../../Theme";
import { ThemeStore } from "../../contexts/ThemeStore";
import { StoreContext } from '../../contexts/Store'
import { Route , Redirect} from "react-router-dom";
import styled from 'styled-components';
import HeaderBar from '../HeaderBar';
import HomePage from '../../pages/HomePage';
import DetailPage from '../../pages/DetailPage';
import AboutPage from '../../pages/AboutPage';
import LoginPage from '../../pages/LoginPage';
import FavoritesPage from '../../pages/FavoritesPage';
import NotFound from '../../pages/NotFound';


import {
  Switch
} from "react-router-dom";

const StyledContainer = styled.div`
  background-color: ${(props) => props.theme.background};
  height:3000px;
`
const ProtectedRoute = ({ component: Component, ...rest }) => {
  const {
      "loggedIn": [loggedIn]
  } = React.useContext(StoreContext)
  
  return (
    <Route {...rest} render={(props) => (
      loggedIn=== true ?
        <Component {...props} /> : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
  )
};

function App() {
  return (
    <React.StrictMode>
      <ThemeStore>
        <Theme>
          <HeaderBar />
          <StyledContainer>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="/login">
                <LoginPage />
              </Route>
              <ProtectedRoute path='/favorites' component={FavoritesPage} />
              <Route
                path="/video/:id"
                children={<DetailPage/>}
              />
              <Route
                path="/about"
                children={<AboutPage/>}
              />
              <Route component={NotFound} />
            </Switch>
          </StyledContainer>
        </Theme>
      </ThemeStore> 
    </React.StrictMode>
  );
}

export default App;
