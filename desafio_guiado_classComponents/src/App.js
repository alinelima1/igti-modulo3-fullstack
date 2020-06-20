import React, { Component, Fragment } from 'react';
import Counter from './components/counter/counter';
import Counter2 from './components/counter/counter2';
import Bands from './components/Bands';
export default class App extends Component {
  constructor() {
    super();

    this.state = {
      currentCounter: 3,
      steps: 0,
    };
  }

  handleCount = (type) => {
    const { currentCounter, steps } = this.state;
    this.setState({
      currentCounter: type === '+' ? currentCounter + 1 : currentCounter - 1,
      steps: steps + 1,
    });
  };

  render() {
    const { currentCounter, steps } = this.state;

    return (
      <Fragment>
        <h3>Band</h3>
        <Bands />
        <h3>Counter</h3>
        <Counter />
        <Counter />
        <Counter />
        <h3>Counter 2</h3>
        <Counter2
          onCount={this.handleCount}
          countValue={currentCounter}
          currentSteps={steps}
        />
        <Counter2
          onCount={this.handleCount}
          countValue={currentCounter}
          currentSteps={steps}
        />
        <Counter2
          onCount={this.handleCount}
          countValue={currentCounter}
          currentSteps={steps}
        />
      </Fragment>
    );
  }
}
