import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import StoreProvider from './contexts/Store'
import { HashRouter as Router } from "react-router-dom";

// console.log(process.env.REACT_APP_YOUTUBE_API_KEY);

ReactDOM.render(
    <Router>
        <StoreProvider>
            <App />
        </StoreProvider>
    </Router>,
     document.getElementById('root'));
