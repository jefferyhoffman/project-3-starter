import React from 'react';
import './style.css';
import AuthContext from '../../contexts/AuthContext';

class UploadForm extends React.Component {
    static contextType = AuthContext;
    constructor(props) {
      super(props);
      this.state = {
        title: "",
        newGallery: null
      };
    }
  
    handleInputChange= event => {
      if (event.target.name === 'title') {
        this.setState({
            title: event.target.value
        })
      } 
      else {
        this.setState({
            newGallery: event.target.files
        })
      }
    }

    handleSubmit = event => {
      console.log(this.state)
      console.log(this.context.user)
    }
  
    render() {
      return (
        <div className='form'>
          <input name='title' type='text' onChange={this.handleInputChange} />
          <input type="file" name="file" id="file" className="inputfile" onChange={this.handleInputChange}/>
          <label htmlFor="file">Choose a file</label>
          <button className='btn btn-dark' onClick={this.handleSubmit}>Create!</button>
        </div>
      );
    }
  }

  export default UploadForm;