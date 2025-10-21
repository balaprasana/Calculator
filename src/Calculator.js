import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [display, setDisplay] = useState('0');

  const handleNumberClick = (num) => {
    setDisplay((prev) => (prev === '0' ? num : prev + num));
  };

  const handleOperatorClick = (operator) => {
    setDisplay((prev) => prev + ' ' + operator + ' ');
  };

  const handleDelete = () => {
    setDisplay((prev) => (prev.length > 1 ? prev.slice(0, -1) : '0'));
  };

  const handleReset = () => {
    setDisplay('0');
  };

  const handleEqual = () => {
    try {
      setDisplay(eval(display.replace('×', '*').replace('÷', '/')) || '0');
    } catch {
      setDisplay('Error');
    }
  };

  return (
    <div className="calculator-container">
      <div className="calculator">
        <div className="display">{display}</div>
        <div className="buttons">
          <button onClick={() => handleNumberClick('7')}>7</button>
          <button onClick={() => handleNumberClick('8')}>8</button>
          <button onClick={() => handleNumberClick('9')}>9</button>
          <button className="delete" onClick={handleDelete}>Delete</button>
          <button onClick={() => handleNumberClick('4')}>4</button>
          <button onClick={() => handleNumberClick('5')}>5</button>
          <button onClick={() => handleNumberClick('6')}>6</button>
          <button onClick={() => handleOperatorClick('+')}>+</button>
          <button onClick={() => handleNumberClick('1')}>1</button>
          <button onClick={() => handleNumberClick('2')}>2</button>
          <button onClick={() => handleNumberClick('3')}>3</button>
          <button onClick={() => handleOperatorClick('-')}>-</button>
          <button onClick={() => handleNumberClick('.')}>.</button>
          <button onClick={() => handleNumberClick('0')}>0</button>
          <button onClick={() => handleOperatorClick('÷')}>/</button>
          <button onClick={() => handleOperatorClick('×')}>×</button>
          <button className="reset" onClick={handleReset}>Reset</button>
          <button className="equal" onClick={handleEqual}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;