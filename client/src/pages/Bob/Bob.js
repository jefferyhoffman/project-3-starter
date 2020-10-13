import React, { Component } from "react";
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';

const styles = {
  menu: {
    position: "sticky",
    maxHeight: "100vw",
    marginTop: "10px"

  },
  font: {
    color: "black"
  },
  active: {
    backgroundColor: "grey"
  },
  videos: {
    width: "450",
    height: "205"
  },
  title: {
    marginTop: "100px",
    fontFamily: "'Raleway', serif",
    paddingBottom: "-50px"
  }
}

class Bob extends Component {
  render() {
    return (
      <div>
        <h1 class="title is-1" style={styles.title}>Relax With Bob Ross</h1>
          <div className="columns">
            <div className="column">
              <figure> {/* Video 1 */}
                <iframe width="560" height="315" src="https://www.youtube.com/embed/VlucWfTUo1A" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </figure>
            </div>
            <div className="column">
              <figure>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/qx2IsmrCs3c" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </figure>

            </div>
          </div>
          <div className="columns">
            <div className="column">
              <figure> {/* Video 1 */}
              <iframe width="560" height="315" src="https://www.youtube.com/embed/OX8xVftE6ak" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </figure>
            </div>
            <div className="column">
              <figure>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/dNEp3hoHSDI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </figure>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <figure> {/* Video 1 */}
              <iframe width="560" height="315" src="https://www.youtube.com/embed/IBFeDo9SsAA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </figure>
            </div>
            <div className="column">
              <figure>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/x-9CqidKRSM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </figure>
            </div>
          </div>
        </div>
    );
  }
}

export default Bob;