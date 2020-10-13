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
    float: "left",
    marginTop: "-10px",
    marginLeft: "20px",
    fontWeight: "bold",
    color: "black"
  },
  headerTwo: {
    float: "left",
    marginTop: "-30px",
    marginLeft: "25px",
    fontSize: "30px",
    marginBottom: "50px",
    color: "black"
  },
  SectionLeft: {
    marginLeft: "60px",
    fontSize: "50px",
    textAlign: "left"
  },
  content: {
    textAlign: "left",
    fontSize: "25px",
    fontWeight: "bold",
    marginRight: "30px",
    color: "black"
  },
  numbers: {
    fontSize: "25px",
    textAlign: "left",
    color: "black"
  },
  hr: {
    backgroundColor: "grey"
  }
}

class Hotline extends Component {
  render() {
    return (
      <div>
        <p className="subtitle is-1" style={styles.header}>Crisis Hotlines and Resources</p>
        <p style={styles.headerTwo}>Need to talk to someone? Specialist are available for confidential telephone counseling.</p>
        <img src="https://www.apa.org/images/article-crisis_tcm7-256481.jpg" style={{ width: 2000, height: 400 }} />

        <br />
        <br />
        <br />
        <br/>
        <br/>
        <br/>
        <hr style={styles.hr} />

        {/* <section className="section"> */}
          <div className="container" >
            <div className="columns">
              <div className="column">
                <h1 className="title is-half"></h1>
                <h2 className="subtitle" style={styles.sectionLeft}></h2>
                <p style={styles.content}>National Suicide Prevention Lifeline</p>
                <p style={styles.numbers}>(800)273-8255</p>
                <br />
                <p style={styles.content}>National Suicide Prevention Lifeline</p>
                <p style={styles.content}>(Spanish)</p>
                <p style={styles.numbers}>(800)628-9454</p>
                <br />
                <p style={styles.content}>National Suicide Prevention Lifeline</p>
                <p style={styles.content}>(Options for Deaf and Hard of Hearing)</p>
                <p style={styles.numbers}>(800)799-4889</p>
                <br />
                <p style={styles.content}>Crisis Text Line</p>
                <p style={styles.numbers}>text HELLO to 741741</p>
                <br />
                <p style={styles.content}>National Domestic Violence Hotline</p>
                <p style={styles.numbers}>(800)799-7233</p>
                <br />
                <p style={styles.content}>Veterans Crisis Line</p>
                <p style={styles.numbers}>(800)273-8255</p>
                <br />
              </div>

              <div className="column is-half">
                <h1 className="title"></h1>
                <ul className="subtitle" style={styles.sectionLeft}></ul>
                <p style={styles.content}>National Graduate Student Crisis Hotline</p>
                <p style={styles.numbers}>(877)472-3457</p>
                <br />
                <p style={styles.content}>National Sexual Assault Hotline</p>
                <p style={styles.numbers}>(800)656-4673</p>
                <br />
                <p style={styles.content}>Child Abuse Hotline</p>
                <p style={styles.numbers}>(800)422-4453</p>
                <br />
                <p style={styles.content}>CDC National HIV & AIDS Hotline</p>
                <p style={styles.numbers}>(800)342-2437</p>
                <br />
                <p style={styles.content}>Alcohol Anonymous</p>
                <p style={styles.numbers}>(202)966-9155</p>
                <br />
                <p style={styles.content}>Narcotics Anonymous</p>
                <p style={styles.numbers}>(800)543-4670</p>
                <br />
                <p style={styles.content}>Gamblers Anonymous</p>
                <p style={styles.numbers}>(855)222-5542</p>
                <br />
              </div>
            </div>
          </div>
        {/* </section > */}
      </div >





    );
  }
}


export default Hotline;