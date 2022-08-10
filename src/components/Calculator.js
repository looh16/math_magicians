import React, { Component } from 'react';
import './Calculator.css';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="box a">0</div>
        <div className="box right">AC</div>
        <div className="box right">+/-</div>
        <div className="box right">%</div>
        <div className="box left">÷</div>
        <div className="box right">7</div>
        <div className="box right">8</div>
        <div className="box right">9</div>
        <div className="box left">x</div>
        <div className="box right">4</div>
        <div className="box right">5</div>
        <div className="box right">6</div>
        <div className="box left">-</div>
        <div className="box right">1</div>
        <div className="box right">2</div>
        <div className="box right">3</div>
        <div className="box left">+</div>
        <div className="box right">.</div>
        <div className="box left">=</div>
        <div className="box vd right">0</div>
      </div>
    );
  }
}

export default Calculator;
