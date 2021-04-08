import React, { useLayoutEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { createGlobalStyle } from 'styled-components';
import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import Private from '../Private';
import Layout from '../Layout';
import { random } from '../../utils/fns';
import ThemeContext from '../../state/ThemeContext';

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
}
`;

function App() {
  useLayoutEffect(() => {
    const { body } = document;

    function rotateBackground() {
      const xPercent = random(100);
      const yPercent = random(100);
      body.style.setProperty('--bg-position', `${xPercent}% ${yPercent}%`);
    }

    const intervalId = setInterval(rotateBackground, 3000);
    body.addEventListener('click', rotateBackground);

    return () => {
      clearInterval(intervalId);
      body.removeEventListener('click', rotateBackground);
    };
  }, []);

  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <BrowserRouter>
        <AuthProvider>
          <Layout>
            <GlobalStyle />
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/login">
                <LoginPage />
              </Route>
              <Private exact path="/secret">
                <SecretPage />
              </Private>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </Layout>
        </AuthProvider>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
