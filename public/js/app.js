'use strict';

import React, { Component } from 'react';
import { render } from 'react-dom';
import Counter from './Counter';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import counterApp from './reducers';


var store = createStore(counterApp);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Counter />
      </Provider>,
      document.getElementById('app')
    )
  }
}