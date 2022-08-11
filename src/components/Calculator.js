import React, { Component } from 'react';
import calculate from '../logic/calculate';
import './Calculator.css';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = ({});
    this.calculatorClickHandle = this.calculatorClickHandle.bind(this);
  }

  calculatorClickHandle(e) {
    this.setState((state) => calculate(state, e.target.innerText));
  }

  render() {
    const { next, total, operation } = this.state;
    return (
      <div className="container">
        <p className="box a">
          <span>{total}</span>
          <span>{operation}</span>
          <span>{next}</span>
        </p>
        <button type="button" className="box right" onClick={this.calculatorClickHandle}>AC</button>
        <button type="button" className="box right" onClick={this.calculatorClickHandle}>+/-</button>
        <button type="button" className="box right" onClick={this.calculatorClickHandle}>%</button>
        <button type="button" className="box left" onClick={this.calculatorClickHandle}>÷</button>
        <button type="button" className="box right" onClick={this.calculatorClickHandle}>7</button>
        <button type="button" className="box right" onClick={this.calculatorClickHandle}>8</button>
        <button type="button" className="box right" onClick={this.calculatorClickHandle}>9</button>
        <button type="button" className="box left" onClick={this.calculatorClickHandle}>x</button>
        <button type="button" className="box right" onClick={this.calculatorClickHandle}>4</button>
        <button type="button" className="box right" onClick={this.calculatorClickHandle}>5</button>
        <button type="button" className="box right" onClick={this.calculatorClickHandle}>6</button>
        <button type="button" className="box left" onClick={this.calculatorClickHandle}>-</button>
        <button type="button" className="box right" onClick={this.calculatorClickHandle}>1</button>
        <button type="button" className="box right" onClick={this.calculatorClickHandle}>2</button>
        <button type="button" className="box right" onClick={this.calculatorClickHandle}>3</button>
        <button type="button" className="box left" onClick={this.calculatorClickHandle}>+</button>
        <button type="button" className="box zero right" onClick={this.calculatorClickHandle}>0</button>
        <button type="button" className="box right" onClick={this.calculatorClickHandle}>.</button>
        <button type="button" className="box left" onClick={this.calculatorClickHandle}>=</button>
      </div>
    );
  }
}

export default Calculator;
