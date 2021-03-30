import React from 'react';
import AppWrapper from './AppWrapper';
import { createBrowserHistory } from 'history';
import LayoutWrapper from '../Layout/LayoutWrapper';
import Content from './Content';
import { Router } from 'react-router';

const history = createBrowserHistory();

const App = () =>{
  return (
    <AppWrapper>
      <Router history={history}>
        {
          <LayoutWrapper>
            <Content />
          </LayoutWrapper>
        }
      </Router>
    </AppWrapper>
  );
}

export default App;
