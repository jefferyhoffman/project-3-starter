import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <form>
        <label htmlFor="start-point">Starting Point</label>
        <br />
        <input name="start-point" type="text" />
        <br />
        <label htmlFor="end-point">Ending Point</label>
        <br />
        <input name="end-point" type="text" />
        <br />
        <input type="submit" value="Generate Playlist" />
      </form>
    );
  }
}

export default Form;
