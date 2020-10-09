import React, { useState } from 'react';
import './App.css';
function increments () {
  const [count, setCount] = useState(2)
  // const [theme, setTheme] = useState('blue')
  function decrementCount() {
    setCount(prevCount => prevCount - 1)
    // setTheme('blue')
  }
  function incrementCount() {
    setCount(prevCount => prevCount + 1)
    // setTheme('red')
  }
  return (
    <>
    <button onClick={decrementCount}>-</button>
    <span>{count}</span>
    {/* <span >{theme}</span> */}
    <button onClick={incrementCount}>+</button>
    </>
  );
}
export default increments ;