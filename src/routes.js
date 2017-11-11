import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import Home from './subcomponents/home';
import Login from './subcomponents/login';



const Routing = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

export default Routing;