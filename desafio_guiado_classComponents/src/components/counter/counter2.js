import React, { Component } from 'react';
import css from './counter.module.css';
import IncrementButton from './IncrementButton';
import DecrementButton from './DecrementButton';
import Value from './Value';
import Steps from './Steps';

export default class Counter2 extends Component {
  handleButtonClick = (clickType) => {
    this.props.onCount(clickType);
  };

  render() {
    const { countValue, currentStep } = this.props;
    return (
      <div className={css.counterContainer}>
        <DecrementButton onDecrement={this.handleButtonClick} />
        <Value value={countValue} />
        <IncrementButton onIncrement={this.handleButtonClick} />
        <Steps curretStep={currentStep} />
      </div>
    );
  }
}

// Para criar uma classe completa, no arquivo em branco pode-se digitar 'rcc' como atalho
