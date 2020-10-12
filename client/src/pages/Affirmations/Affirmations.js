import React, { useEffect, useState } from "react";

const styles = {
    cardBody: {
        fontSize: "40px",
        fontFamily: "'Playfair Display', serif",
        color: "black"

    },
    cardTwo: {
        fontSize: "40px",
        fontFamily: "'Playfair Display', serif",
        color: "black",
        marginLeft: "40px",
        marginTop: "60px"
    },
    cardThree: {
        fontSize: "40px",
        fontFamily: "'Playfair Display', serif",
        color: "black",
        marginLeft: "40px",
        marginTop: "75px"
        
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
        marginLeft: "50px",
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
                        <p className="subtitle" style={styles.cardBody}> "I choose to be happy and to love myself today."
                    </p>
                    </article>
                </div>
                <div className="tile is-parent">
                    <article className="tile is-child box">
                        <p className="subtitle" style={styles.cardBody, styles.cardTwo}>"My possibilities are ENDLESS."
 </p>
                    </article>
                </div>
                <div className="tile is-parent">
                    <article className="tile is-child box">
                        <p className="subtitle" style={styles.cardBody}> "I will be kind to myself and others today."
    </p>
                    </article>
                </div>
            </div>

            <div className="tile is-ancestor">
                <div className="tile is-vertical is-12">
                    <div className="tile">
                        <div className="tile is-parent">
                            <article className="tile is-child box">
                                <p className="content" style={styles.cardBody, styles.cardFive}>"I'm better than I used to be. Better than I was yesterday. But hopefully not as good as I'll be tomorrow."
       </p>
                            </article>
                        </div>
                        <div className="tile is-8 is-vertical">
                            <div className="tile">
                                <div className="tile is-parent">
                                    <article className="tile is-child box">
                                        <p className="subtitle" style={styles.cardBody, styles.cardSix} >"I am WORTHY of good things."
      </p>
                                    </article>
                                </div>
                                <div className="tile is-parent">
                                    <article className="tile is-child box">
                                        <p className="subtitle" style={styles.cardBody, styles.cardThree}> "Today is YOUR day."  </p>
                                    </article>
                                </div>
                            </div>
                            <div className="tile is-parent">
                                <article className="tile is-child box">
                                    <p className="content" style={styles.cardBody, styles.cardEight}> "I CHOOSE happiness. Not because everything is good, but because I can see the good side of everything."
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

