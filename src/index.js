import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routing from './routes.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((<Routing />), document.getElementById('root'));
registerServiceWorker();
