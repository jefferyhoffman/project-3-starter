import React from 'react';

export function Input(props) {
  return (
    <div className='form-group'>
      <input className='form-control' {...props} />
    </div>
  );
}
export function Select(props) {
  return (
    <div className='form-group'>
      <select className='form-control' {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className='form-group'>
      <textarea className='form-control' rows='8' {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <div {...props} style={{ float: 'right', marginBottom: 10 }} className='btn btn-lg btn-info'>
      {props.children}
    </div>
  );
}