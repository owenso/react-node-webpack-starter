import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './components/App';


ReactDOM.render(
    <AppContainer>
        <App />
    </AppContainer>,
    document.getElementById('container'));


// Hot Module Replacement API
//https://github.com/gaearon/react-hot-loader/tree/next-docs/docs
if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default;
    ReactDOM.render(
      <AppContainer>
        <NextApp/>
      </AppContainer>
      ,
      document.getElementById('container')
    );
  });
}
