import React from "react";
import '../../styles/cards.css';

const styles = {
    cardBody: {
        fontSize: "40px",
        fontFamily: "'Playfair Display', serif",
        color: "black"

    },
    cardTwo: {
        backgroundColor: "#71758D"
    },
    cardThree: {
        backgroundColor: "#8D7183"
    },
    cardSix: {
        fontSize: "40px",
        fontFamily: "'Playfair Display', serif",
        color: "black",
        marginLeft: "20px",
        marginTop: "80px"
    },
    cardFive: {
        fontSize: "50px",
        fontFamily: "'Playfair Display', serif",
        color: "black",
        marginLeft: "65px",
        marginTop: "80px",
        color: "#71758D"
    },
    cardEight: {
        fontSize: "40px",
        fontFamily: "'Playfair Display', serif",
        color: "black",
        marginLeft: "20px",
        marginTop: "80px"
    },
    tileTitle: {
        fontSize: "60px",
        fontFamily: "'Playfair Display', serif",
        color: "#71758D",
        textAlign: "left",
        marginBottom: "60px"

    }
}

function Affirmations() {
    return (

        <div>
            <h1 style={styles.tileTitle}>Affirmations</h1>
            <div className="tile is-ancestor">
                <div className="tile is-parent">
                    <article className="tile is-child box">
                        <p className="subtitle" style={styles.cardBody}> "My positive thoughts guide me to new heights"
                    </p>
                    </article>
                </div>
                <div className="tile is-parent">
                    <article className="tile is-child box">
                        <p className="subtitle" style={styles.cardBody}>"I create my own path and walk it with joy."
 </p>
                    </article>
                </div>
                <div className="tile is-parent">
                    <article className="tile is-child box">
                        <p className="subtitle" style={styles.cardBody}> "My positive thoughts guide me to new heights"
    </p>
                    </article>
                </div>
            </div>

            <div className="tile is-ancestor">
                <div className="tile is-vertical is-12">
                    <div className="tile">
                        <div className="tile is-parent">
                            <article className="tile is-child box">
                                <p className="content" style={styles.cardBody, styles.cardFive}>"I am conquering my fears and becoming stronger each day."
       </p>
                            </article>
                        </div>
                        <div className="tile is-8 is-vertical">
                            <div className="tile">
                                <div className="tile is-parent">
                                    <article className="tile is-child box">
                                        <p className="subtitle" style={styles.cardBody, styles.cardSix} >"I will have a good day, because it's my choice."
      </p>
                                    </article>
                                </div>
                                <div className="tile is-parent">
                                    <article className="tile is-child box">
                                        <p className="subtitle" style={styles.cardBody}> "I am grateful for all that is unfolding in my life and all that is yet to come."
     </p>
                                    </article>
                                </div>
                            </div>
                            <div className="tile is-parent">
                                <article className="tile is-child box">
                                    <p className="content" style={styles.cardBody, styles.cardEight}> "My potential is limitless, and I choose where to spend my energy."
     </p>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Affirmations;

