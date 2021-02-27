import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from '../Layout';
import Routes from '../Routes/Routes.component';
import Theme from './App.styled';

function App() {
  return (
    <Theme>
      <BrowserRouter>
        <Layout>
          <Routes />
        </Layout>
      </BrowserRouter>
    </Theme>
  );
}

export default App;
