import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import Fulllayout from './layouts/fulllayout.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './assets/scss/style.css';

ReactDOM.render(
  <Provider store={store}>
    <ToastContainer />
    <Router>
      <Switch>
        <Route path='/' component={(props) => <Fulllayout {...props} />} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
