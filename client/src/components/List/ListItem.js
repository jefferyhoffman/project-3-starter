import React from 'react';

class ListItem extends React.Component{
    constructor(props){
      super(props);

    }
    componentDidUpdate() {
      if (this.props.editing) {
        this.nameInput.focus();
      }
    }
  
    render () {
      return this.props.editing ? <input ref={input => this.nameInput= input} className="list-group-item" defaultValue={this.props.children[1]} onBlur={this.props.onBlur} onChange={e => this.props.onChange(e)}/> : <li className="list-group-item" onClick={(e) => this.props.onClick(e)}>{this.props.children}</li>
    }
  }

  export default ListItem;