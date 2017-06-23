'use strict';

import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { CounterActions } from './actions';

class App extends Component {
  constructor(props) {
    super(props);
  }

  click() {
    this.props.testClick();
  }

  render() {
    return (
      <div>
        <h1>REDUX/Counter</h1>
        <h2>Counter: {this.props.counter}</h2>
        <button onClick={this.click.bind(this)}>Click Me</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    testClick: () => dispatch(CounterActions('Add'))
  }
}

const mapStateToProps = (state) => {
  return state;
}

const DefaultApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default App;