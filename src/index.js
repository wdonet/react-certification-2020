import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import StoreProvider from './contexts/Store'
// console.log(process.env.REACT_APP_YOUTUBE_API_KEY);

ReactDOM.render(
    <StoreProvider>
        <App />
    </StoreProvider>,
     document.getElementById('root'));
