import React, { Component } from 'react';
import { Input, TextArea, FormBtn } from "../../components/Form";


class Add extends Component {
  render() {
    return (
      <div>
        <h1>Create Drink</h1>
        <form>
              <Input name="image" placeholder="Image (required)" />
              <Input name="name" placeholder="Name (required)" />
              <TextArea name="instructions" placeholder="Instructions (required)" />
              <TextArea name="ingredients/measurements" placeholder="Ingredients/Measureements" />
              <FormBtn>Submit Drink</FormBtn>
        </form>
      </div>
    );
  }
}

export default Add;
