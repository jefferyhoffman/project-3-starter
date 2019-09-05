import React, { Component } from 'react';
import Jumbotron from "../../components/Jumbotron"
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
//import { Redirect } from 'react-router-dom';

import API from '../../lib/API';
import AuthContext from '../../contexts/AuthContext';

class Secret extends Component {
  static contextType = AuthContext;

  state = {
    isLoading: true,
    error: ""
  }

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
  }


    fvstate = {
    presentValue: [],
    rate: "",
    periods: "",
    years: ""
  };



  render() {
    return (
      <div className='Secret'>
        <div className='row'>
          <div className='col'>
            {this.state.isLoading
              ? <div className='alert alert-success'>Loading...</div>
              : this.state.error
                ? <div className='alert alert-danger'>{this.state.error}</div>
                : <div>

<Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Enter Inputs Here!</h1>
            </Jumbotron>
            { <form>
              <Input
                value={this.fvstate.presentValue}
                onChange={this.handleInputChange}
                name="presentValue"
                placeholder="Present Value => 10000 (required)"
              />
              
              <Input
                value={this.fvstate.rate}
                onChange={this.handleInputChange}
                name="rate"
                placeholder="Rate => e.g. 0.05 for 5% (required)"
              />
              <Input
                value={this.fvstate.numberOfPeriods}
                onChange={this.handleInputChange}
                name="numberOfPeriods"
                placeholder="Period => e.g. Enter 12 for monthly | 1 for  annually  (required)"
              />
              <Input
                value={this.fvstate.years}
                onChange={this.handleInputChange}
                name="years"
                placeholder="Years => e.g. Enter 10 for 10 years  (required)"
              />
              <TextArea
                value={this.fvstate.synopsis}
                onChange={this.handleInputChange}
                name="notes"
                placeholder="Notes (Optional)"
              />
              { <FormBtn
                disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Calculate Future Value
              </FormBtn> }
            </form> }
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Future Value Calculation</h1>
            </Jumbotron>
            {/* {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )} */}
          </Col>
        </Row>
</Container>

                  <p>It's never a question about how much something cost...</p>
                  {/* <p><em>{this.state.secrets[0].message}</em></p> */}
                  <p>the real question to be answered is</p> 
                  <p> <em>"How do we finance this?"</em></p>


                
                </div>}
          </div>
        </div>
      </div>
    );
  }
}

export default Secret;
