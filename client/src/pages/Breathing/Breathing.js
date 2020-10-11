import React, { Component } from "react";




class Breathing extends Component {
    render() {
      return (
              <section>
                <div className="columns">
                  <div className="card-image column">
                    <figure> {/* Video 1 */}
                     <iframe width="560" height="315" src="https://www.youtube.com/embed/pKO9UjSeLew" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  
                    </figure>
                  </div>
                  <div className="card-image column">
                    <figure> {/* Video 2 */}
                     <iframe width="560" height="315" src="https://www.youtube.com/embed/CYVBfaot8tU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  
                    </figure>
                  </div>
                </div>

                <div className="columns">
                  <div className="card-image column">
                    <figure> {/* Video 3 */}
                     <iframe width="560" height="315" src="https://www.youtube.com/embed/DODLEX4zzLQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  
                    </figure>
                  </div>
                  <div className="card-image column">
                    <figure> {/* Video 4 */}
                     <iframe width="560" height="315" src="https://www.youtube.com/embed/59l4cedIwX0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  
                    </figure>
                  </div>
                </div>

                <div className="columns">
                  <div className="card-image column">
                    <figure> {/* Video 3 */}
                      <iframe width="560" height="315" src="https://www.youtube.com/embed/xqKwMFvSLvs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  
                    </figure>
                  </div>
                  <div className="card-image column">
                    <figure> {/* Video 4 */}
                      <iframe width="560" height="315" src="https://www.youtube.com/embed/8oKYK1MPwhM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  
                    </figure>
                  </div>
                </div>
              </section>
      
      );
    }
  }
  
  export default Breathing;

