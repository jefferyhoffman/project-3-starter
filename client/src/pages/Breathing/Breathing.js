import React, { Component } from "react";




class Breathing extends Component {
    render() {
      return (
              <section>
                <div className="columns">
                  <div className="card-image column">
                    <figure> {/* Video 1 */}
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/odADwWzHR24" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </figure>
                  </div>
                  <div className="card-image column">
                    <figure> {/* Video 2 */}
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/CQjGqtH-2YI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </figure>
                  </div>
                </div>

                <div className="columns">
                  <div className="card-image column">
                    <figure> {/* Video 3 */}
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/ybl3Cou9pTc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </figure>
                  </div>
                  <div className="card-image column">
                    <figure> {/* Video 4 */}
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/N9jmO6xwFfs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </figure>
                  </div>
                </div>

                <div className="columns">
                  <div className="card-image column">
                    <figure> {/* Video 5 */}
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/vXZ5l7G6T2I" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </figure>
                  </div>
                  <div className="card-image column">
                    <figure> {/* Video 6 */}
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/d6d7_oJGzKQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </figure>
                  </div>
                </div>
              </section>
      
      );
    }
  }
  
  export default Breathing;

