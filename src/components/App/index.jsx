import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../../theme';
import GlobalStyle from '../../theme/globalStyle';

import Header from '../Header';
import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import Layout from '../Layout';

function App() {
  const [theme, setTheme] = useState('light');
  const handleThemeSwitch = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <>
      <GlobalStyle theme={theme === 'light' ? lightTheme : darkTheme} />
      <BrowserRouter>
        <AuthProvider>
          <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <Header handleThemeSwitch={handleThemeSwitch} />
            <Layout>
              <Switch>
                <Route exact path="/">
                  <HomePage />
                </Route>
              </Switch>
            </Layout>
          </ThemeProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
