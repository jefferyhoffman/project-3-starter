import React, { Component } from "react";

const styles = {
  title: {
    marginTop: "100px",
    fontFamily: "'Raleway', serif",
    paddingBottom: "-60px",
    fontSize: "60px",
    textAlign:"left",
    marginLeft: "30px",
    color: "#8D7183"
  }
  }


class Odd extends Component {
    render() {
      return (
        <div>
        <h1 class="title is-1" style={styles.title}>Oddly Satisfying</h1>
              <section>
                <div className="columns">
                  <div className="card-image column">
                    <figure> {/* Video 1 */}
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Cl95TYblQsw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  
                    </figure>
                  </div>
                  <div className="card-image column">
                    <figure> {/* Video 2 */}
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/a2m44DC4d7w" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </figure>
                  </div>
                </div>

                <div className="columns">
                  <div className="card-image column">
                    <figure> {/* Video 3 */}
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/XNbwNCXcXYE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </figure>
                  </div>
                  <div className="card-image column">
                    <figure> {/* Video 4 */}
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/98Vb8VjyV-s" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </figure>
                  </div>
                </div>

                <div className="columns">
                  <div className="card-image column">
                    <figure> {/* Video 5 */}
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/CCPQ_WU9aGQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </figure>
                  </div>
                  <div className="card-image column">
                    <figure> {/* Video 6 */}
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/q9BtYEnrkg4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </figure>
                  </div>
                </div>
              </section>
              </div>
      
      );
    }
  }
  
  export default Odd;

