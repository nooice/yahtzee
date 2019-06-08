import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  convertNumber = num => {
    let stringVal = ['one', 'two', 'three', 'four', 'five', 'six'];
    return stringVal[num-1];
  }

  disableDie = () => {
    this.props.handleClick(this.props.idx);
  }

  render() {
    return (
      <i
        className={`Die fas fa-dice-${this.convertNumber(this.props.val)} fa-5x ${this.props.locked ? 'Die-locked' : ''} ${this.props.rolling ? 'Die-rolling' : ''}`}
        onClick={this.disableDie}
      >
      </i>
    );
  }
}

export default Die;
