import React from 'react';
// eslint-disable-next-line react/prefer-stateless-function

const calculatorClickHandle = jest.fn(() => 3);

const Calculator = () => (
  <>
    <section className="main-container">
      <div>
        <p>Let do some math</p>
      </div>
      <div className="container">
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
  </>
);
export { Calculator, calculatorClickHandle };
