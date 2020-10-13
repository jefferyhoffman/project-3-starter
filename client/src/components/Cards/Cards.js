import React from "react";
import '../../styles/cards.css';

const styles = {
    cardOne: {
        backgroundColor: "#718D7B"
    },
    cardTwo: {
        backgroundColor: "#71758D"
    },
    cardThree: {
        backgroundColor: "#8D7183"
    },
    pTag: {
        fontFamily: "'Great Vibes', cursive",
        fontSize: "60px",
        color: "white"
    },
    title: {
        fontSize: "20px"
    }
}

function Cards() {
    function buttonClick() {
        const url = "https://screening.mhanational.org/screening-tools";
        window.open(url, '_blank');
    }
    function buttonClick2() {
        const url = "/login";
        window.open(url);
    }
    function buttonClick3() {
        const url = "/clinic";
        window.open(url);
    }
    function buttonClick4() {
        const url = "/hotline";
        window.open(url);
    }

        return (
            <section className="section">
                <div className="columns">
                    <div className="card column" style={styles.cardOne}>
                        <div style={styles.title}>Get on track with your</div>
                        <div className="card-body" style={styles.pTag}>Emotions
                        </div>
                        <div>Mental health conditions, such as depression or anxiety, are real, common and treatable. And recovery is possible.</div>
                        <br />
                        <button class="button is-medium is-success is-light" onClick={buttonClick}>Take an Assessment</button>
                    </div>
                    <div className="image-box column">
                        {/*    <h5 className="card-title"></h5> */}
                        <img src="https://images.pexels.com/photos/697243/pexels-photo-697243.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="card-img-top" alt="" />
                        {/* <div className="card-body">
                    </div> */}
                    </div>
                    <div className="card column" style={styles.cardTwo}>
                        <h5 className="card-title" style={styles.title}>Log in for your daily </h5>
                        <div style={styles.pTag}>Affirmation</div>
                        <div className="card-body">"Though these times are difficult, they are only a short phase of life."
              </div>
                        <br />
                        <br />
                        <button class="button is-medium is-success is-light" onClick={buttonClick2}>Log In</button>
                    </div>
                </div>
                <div className="columns">
                    <div className="image-box column">
                        <h5 className="card-title"></h5>
                        <img src="https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="card-img-top" alt="" />
                        <div className="card-body">
                        </div>
                    </div>
                    <div className="card column" style={styles.cardThree}>
                        <h5 className="card-title" style={styles.pTag}>Resources:</h5>
                        <div className="card-body"> If you or someone you know is seeking professional help,
                        follow the link for resources.
            </div>
                        <br />
                        <button class="button is-medium is-success is-inverted is-outlined" onClick={buttonClick4}>Hotlines</button>
                        <br />
                        <br />
                        <button class="button is-medium is-success is-light" onClick={buttonClick3}>Clinics Near Me</button>


                    </div>
                    <div className="image-box column">
                        <h5 className="card-title"></h5>
                        <img src="https://images.pexels.com/photos/2531353/pexels-photo-2531353.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="card-img-top" alt="" />
                        <div className="card-body">
                        </div>
                    </div>
                </div>

            </section >

        )

    }

export default Cards;