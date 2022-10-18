import React, { Component } from 'react';
import { Controls } from './Controls';
export class Counter extends Component {
  //1 static властивості
  static defaultProps = {
    step: 1,
    value: 0,
  };

  static propTypes = {
    // step:PropTypes.number.is
  };

  // 2 стан
  state = {
    value: this.props.value,
    time: 3,
  };

  // 3 кастомні методи
  handleIncrement = () => {
    // this.setState({
    //   value: 1,
    // });
    this.setState(prevState => {
      // console.log(prevState);
      return { value: prevState.value + this.props.step };
    });
  };
  handleDecrement = () => {
    this.setState(prevState => {
      if (prevState.value === 0) return;
      return { value: prevState.value - this.props.step };
    });
  };

  // 4 render
  render() {

    return (
      <div>
        <span>{this.state.value}</span>
        <Controls
          step={this.props.step}
          increment={this.handleIncrement}
          decrement={this.handleDecrement}
        />
      </div>
    );
  }
}
