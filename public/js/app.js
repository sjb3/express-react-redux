'use strict';

import React, { Component } from 'react';
import { render } from 'react-dom';
import Counter from './Counter';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import counterApp from './reducers';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-reducer';

const store = createStore(
  combineReducers({
    gloabal: counterApp,
    routing: routerReducer
  }));

const history = syncHistoryWithStore(browserHistory, store)

render()

    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={} />
      </Router>
      <Counter />
    </Provider>,
    document.getElementById('app')

