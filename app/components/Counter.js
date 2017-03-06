import React, { Component } from 'react';

export default class Counter extends Component {
    constructor(props) {
      super(props);
      this.state = { value: props.initialValue }
    }

    sum(type) {
      this.setState({ value: this.state.value + type});
    }

    render() {
      return (
          <div>
            <h2>{this.props.label}</h2>
            <p>{this.state.value}</p>
            <button onClick={() => this.sum(-1)}>-</button>
            <button onClick={() => this.sum(1)}>+</button>
          </div>
      )
    }
}
