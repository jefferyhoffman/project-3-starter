import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'mdbreact/dist/css/mdb.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
