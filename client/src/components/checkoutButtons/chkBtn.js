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
     <MDBBtn fluid size="sm" className="inline">
                
                <i class="fas fa-minus"></i></MDBBtn>

              <input type="text" className="form-control w-25 inline" id="formGroupExampleInput" placeholder="1"/>  

              <MDBBtn fluid size="sm"  className="inline">
                <i class="fas fa-plus"></i></MDBBtn>
    <button onClick={decrementCount}>-</button>
    <span>{count}</span>
    {/* <span >{theme}</span> */}
    <button onClick={incrementCount}>+</button>
    </>
  );
}
export default increments ;