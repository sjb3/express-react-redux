'use strict';

import { createStore } from 'redux';
import counterApp from './reducers';

var store = createStore(counterApp);

export default store;