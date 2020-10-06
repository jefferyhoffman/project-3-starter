import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.min.css';
=======
import 'react-bulma-components/dist/react-bulma-components.min.css';
>>>>>>> b34bc7179cb4d48457ca16a355bcc7326bec0bdf
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
