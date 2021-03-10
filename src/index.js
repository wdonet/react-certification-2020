import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

// console.log(process.env.REACT_APP_YOUTUBE_API_KEY2);

const app = React.createElement(App);
ReactDOM.render(app, document.getElementById('root'));
