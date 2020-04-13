import React from 'react';
import './style.css';
import AuthContext from '../../contexts/AuthContext';
import API from  '../../lib/API'
class UploadForm extends React.Component {
    static contextType = AuthContext;
    constructor(props) {
      super(props);
      this.state = {
        filename: 'Choose file'
      }
    }
    handleInputChange = () => {
      const input = document.getElementById('file');
      this.setState({filename: input.files[0].name})
    }

    handleSubmit = event => {
      event.preventDefault()
      
      const theFile = document.getElementById('file').files[0]
      API.Users.upload(theFile, this.context.authToken)
        .then(res=>this.context.onRefresh())
    }
  
    render() {
      return (
        <div className='form-holder'>
          <h2 className='abel translate-up'>Upload a New Picture!</h2>
          <div className='form' action="/api/img-upload" method="POST" >
            <input type="file" name="file" id="file" className="inputfile" onChange={this.handleInputChange}/>
            <label className='modern-btn titillium translate-up'htmlFor="file">{this.state.filename}</label>
            <button className='modern-btn titillium translate-up' onClick={this.handleSubmit}>Create!</button>
          </div>
        </div>
      );
    }
  }

  export default UploadForm;