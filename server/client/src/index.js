import React from 'react';
import ReactDOM from 'react-dom';



import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//router 4
import { BrowserRouter } from 'react-router-dom'
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';





ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
