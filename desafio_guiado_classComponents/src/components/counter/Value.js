import React, { Component } from 'react';
import css from './counter.module.css';

export default class Value extends Component {
  render() {
    return <span className={CSS.counterValue}>{this.props.value}</span>;
  }
}
