import React from 'react';

export function List(props) {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">{props.children}</ul>
    </div>
  )
}

// export function ListItem (props) {
//   // return <li className="list-group-item">{children}</li>;
//   return props.editing ? <input ref={input => this.nameInput= input} className="list-group-item" defaultValue={props.children[1]} onBlur={props.onBlur}/> : <li className="list-group-item" onClick={(e) => props.onClick(e)}>{props.children}</li>
// }

