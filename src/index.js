import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import './global.css';

const app = React.createElement(App);
ReactDOM.render(app, document.getElementById('root'));
