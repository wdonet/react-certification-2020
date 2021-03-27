import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import StoreProvider from './contexts/Store'
import { HashRouter as Router } from "react-router-dom";

ReactDOM.render(
    <Router>
        <StoreProvider>
            <App />
        </StoreProvider>
    </Router>,
     document.getElementById('root'));
