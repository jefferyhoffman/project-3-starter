import React, { Component } from 'react';
import Jumbotron from "../../components/Jumbotron";
import form from "../../components/form";
class HomePage extends Component {
  render() {
    return (
      <div className='Home'>
        <div className='row'>
          <div className='col'>
            <Jumbotron>
              <h1>What Books Should I Read?</h1>
            </Jumbotron>
            {/* <Form>
              <Form.Input name="title" placeholder="Title (required)" />
              <Form.Input name="author" placeholder="Author (required)" />
              <Form.TextArea name="synopsis" placeholder="Synopsis (Optional)" />
              <Form.FormBtn>Submit Book</Form.FormBtn>
            </Form> */}
            HomePage
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
