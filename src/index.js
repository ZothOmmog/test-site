import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { AppWithLogin } from './Components';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <AppWithLogin />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
