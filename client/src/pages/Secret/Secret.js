import React, { Component } from 'react';
import "./style.css";
import API from '../../lib/API';
import AuthContext from '../../contexts/AuthContext';
import SearchForm from "../../components/Search/searchContainer"

class Secret extends Component {
  static contextType = AuthContext;
  state = {
    isLoading: true,
    error: ""
  };

  componentDidMount() {
    API.Secrets.getAll(this.context.authToken)
      .then(response => response.data)
      .then(secrets => this.setState({ secrets }))
      .catch(err => {
        if (err.response.status === 401) {
          return this.setState({ error: "Unauthorized. Please login." });
        }
        console.log(err);
      })
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    return (
      <div className="secretP">
      <div className='container'> <div className='Secret'>
      <div className="jumbotron" style={{textAlign:"center"}}> 
       <h1 className="wtma">Welcome!</h1>
       </div>
       <h2 className="VI">Search for your Vacation Inspiraton</h2>
        <div className='row'>
          <div className='col'>
            {this.state.isLoading
              ? <div className='alert alert-success'>Loading...</div>
              : this.state.error
                ? <div className='alert alert-danger'>{this.state.error}</div>
                : <div>
                </div>}
          </div>
           <hr/>
           
       
      </div>
         <SearchForm />
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

      
      
      <br/>
      <div className="container">
      <div className="row">
      <div className="col-lg-12">
      <a href="https://clarkf704.github.io/thisistheoutDoor/"><button className="hike">Get Inspired!</button></a>
      <br/>
      <br/>
      <br/>
      <br/>
      </div>
      </div>
      </div>
     

      </div>
      
    );
  }
}

export default Secret;
