import React, { Component } from "react";

const styles = {
  title: {
    marginTop: "100px",
    fontFamily: "'Raleway', serif",
    paddingBottom: "-60px",
    fontSize: "60px",
    textAlign:"left",
    marginLeft: "30px",
    color: "#71758D"
  }
  }




class Comedy extends Component {
    render() {
      return (
        <div>
        <h1 class="title is-1" style={styles.title}>Comedy Corner</h1>
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
                    <figure> {/* Video 5 */}
                      <iframe width="560" height="315" src="https://www.youtube.com/embed/xqKwMFvSLvs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  
                    </figure>
                  </div>
                  <div className="card-image column">
                    <figure> {/* Video 6 */}
                      <iframe width="560" height="315" src="https://www.youtube.com/embed/8oKYK1MPwhM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  
                    </figure>
                  </div>
                </div>
              </section>
              </div>
      
      );
    }
  }
  
  export default Comedy;

