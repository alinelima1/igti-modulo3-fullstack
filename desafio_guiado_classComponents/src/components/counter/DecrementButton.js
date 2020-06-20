import React, { Component } from 'react';
import css from './counter.module.css';

export default class DecrementButton extends Component {
  handleButtonClick = () => {
    this.props.onDecrement('-');
  };

  render() {
    return (
      <button
        onClick={this.handleButtonClick}
        className="waves-effect waves-light btn red daarken-4"
      >
        -
      </button>
    );
  }
}
