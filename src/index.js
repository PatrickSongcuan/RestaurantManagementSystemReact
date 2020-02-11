import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import * as serviceWorker from './serviceWorker';

import App from './App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers/index'


const store = createStore(reducer);

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, document.getElementById('root'));

serviceWorker.unregister();
