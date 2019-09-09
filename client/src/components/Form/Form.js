import React from 'react';

export function Form({ children }) {
  return(
    <form>
      {children}
    </form>
  )
}

export function FormItem({ children }) {
  return(
    <div className="form-group">
      {children}
    </div>
  )
}

export function FormLabel({ children }) {
  return (
    <label>{children}</label>
  )
}

export function FormInput({ children }) {
  return (
    <input>{children}</input>
  )
}