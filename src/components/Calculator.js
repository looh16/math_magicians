import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [objCalc, setobjCalc] = useState({ total: 0, next: null, operation: null });

  const calculatorClickHandle = (e) => {
    setobjCalc((state) => calculate(state, e.target.innerText));
  };

  return (
    <section className="main-container">
      <div>
        <p>Let do some math</p>
      </div>
      <div className="container">
        <p className="box a">
          <span>{objCalc.total}</span>
          <span>{objCalc.operation}</span>
          <span>{objCalc.next}</span>
        </p>
        <button type="button" className="box right" onClick={calculatorClickHandle}>AC</button>
        <button type="button" className="box right" onClick={calculatorClickHandle}>+/-</button>
        <button type="button" className="box right" onClick={calculatorClickHandle}>%</button>
        <button type="button" className="box left" onClick={calculatorClickHandle}>÷</button>
        <button type="button" className="box right" onClick={calculatorClickHandle}>7</button>
        <button type="button" className="box right" onClick={calculatorClickHandle}>8</button>
        <button type="button" className="box right" onClick={calculatorClickHandle}>9</button>
        <button type="button" className="box left" onClick={calculatorClickHandle}>x</button>
        <button type="button" className="box right" onClick={calculatorClickHandle}>4</button>
        <button type="button" className="box right" onClick={calculatorClickHandle}>5</button>
        <button type="button" className="box right" onClick={calculatorClickHandle}>6</button>
        <button type="button" className="box left" onClick={calculatorClickHandle}>-</button>
        <button type="button" className="box right" onClick={calculatorClickHandle}>1</button>
        <button type="button" className="box right" onClick={calculatorClickHandle}>2</button>
        <button type="button" className="box right" onClick={calculatorClickHandle}>3</button>
        <button type="button" className="box left" onClick={calculatorClickHandle}>+</button>
        <button type="button" className="box zero right" onClick={calculatorClickHandle}>0</button>
        <button type="button" className="box right" onClick={calculatorClickHandle}>.</button>
        <button type="button" className="box left" onClick={calculatorClickHandle}>=</button>
      </div>
    </section>

  );
};

export default Calculator;
