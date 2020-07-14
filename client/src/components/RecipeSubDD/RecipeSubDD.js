import React, {Component} from 'react'
import { Form } from 'semantic-ui-react'
import API from '../../lib/API'

class RecipeSubDD extends Component {

  state = {
    categories: [],
    selected: []
  }

  componentDidMount() {
    API.Categories.all()
      .then((response) => {
        this.setState({ categories: response.data, err: "" });
      })
      .catch((err) => this.setState({ err: err.message }));
  }

  handleChange = (e, data) => {

    this.props.populateCategories(data.value)
  }

  render() {
    let options = this.state.categories.map((category) => {
      return {
        key: category.id,
        text: category.category,
        value: category.id,
      }
    })

    return(

    <Form.Dropdown label="Choose a Food Category" clearable fluid multiple required options={options} selection closeOnChange onChange={this.handleChange}/>
    )
  }
}


export default RecipeSubDD