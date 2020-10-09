import React, { Component } from "react";


const styles = {
  hotline: {
    fontSize: "120px",
    marginRight: "50px",
    backgroundImage: "url(https://images.pexels.com/photos/821754/pexels-photo-821754.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)",
    backgroundRepeat: "no-repeat, no-repeat",
    width: "50%",
    height: "50%",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    fontFamily: "'Raleway', sans-serif;;"
  },
  header: {
    float:"left",
    marginTop: "-10px",
    marginLeft: "20px",
    fontWeight: "bold"
  },
  headerTwo: {
    float:"left",
    marginTop: "-30px",
    marginLeft: "25px",
    fontSize: "30px"
  },
  SectionLeft:{
    marginLeft:"25px",
    fontSize: "50px"
  }
}


class Hotline extends Component {
    render() {
      return (
        <div>
        <p className="subtitle is-1" style={styles.header}>Crisis Hotlines and Resources</p>
        <p style={styles.headerTwo}>Need to talk to someone? Specialist are available for confidential telephone counseling.</p>
        <img src="https://www.apa.org/images/article-crisis_tcm7-256481.jpg" style={{width:2000, height:400}}/>
     
  <section className="section">
    <div className="container" style={styles.sectionLeft}>
      <h1 className="title"></h1>
      <h2 className="subtitle-3">
        <p>National Suicide Prevention Lifeline</p>
        <p>(800)273-8255</p>
        <br/>
        <p>National Suicide Prevention Lifeline</p>
        <p>(Spanish)</p>
        <p>(800)628-9454</p>
        <br/>
        <p>National Suicide Prevention Lifeline</p>
        <p>(Options for Deaf and Hard of Hearing)</p>
        <p>(800)799-4889</p>
        <br/>
        <p>Crisis Text Line</p>
        <p>text HELLO to 741741</p>
        <br/>
        <p>National Domestic Violence Hotline</p>
        <p>(800)799-7233</p>
        <br/>
        <p>Veterans Crisis Line</p>
        <p>(800)273-8255</p>
        <br/>
      </h2>
    </div>
  </section>
 </div>

       

      
      );
    }
  }

  
  export default Hotline;