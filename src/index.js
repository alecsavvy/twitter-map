import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './Store/configureStore'
import HomePage from './Components/HomePage'
import * as serviceWorker from './serviceWorker';
import tweetsSocket from './Store/Modules/tweets/tweets.socket'

tweetsSocket.start(store.dispatch)

ReactDOM.render(
  <Provider store={store}>
    <HomePage />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
