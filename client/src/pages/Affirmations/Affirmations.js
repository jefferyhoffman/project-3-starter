import React, { useEffect, useState } from "react";
import Menu from '../Menu/Menu';
import API from '../../lib/API'



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
const Affirmations = props => {
    const [result, setResult] = useState([])

    useEffect(() => {
        API.Affirmations.getAffirmation()
            .then(({ data }) => setResult(data))

    }, [API.Affirmations])
    console.log(result.affirmation)

    return (

        <div>
            <h1 style={styles.tileTitle}>Affirmations</h1>
            <div className="tile is-ancestor">
                <div className="tile is-parent">
                    <article className="tile is-child box">
                        <p className="subtitle" style={styles.cardBody}>"{result.affirmation}"</p>
                    </article>
                </div>
                <div className="tile is-parent">
                    <article className="tile is-child box">
                        <p className="subtitle" style={styles.cardBody}>"{result.affirmation}"</p>
                    </article>
                </div>
                <div className="tile is-parent">
                    <article className="tile is-child box">
                        <p className="subtitle" style={styles.cardBody}> "{result.affirmation}"</p>
                    </article>
                </div>
            </div>

            <div className="tile is-ancestor">
                <div className="tile is-vertical is-12">
                    <div className="tile">
                        <div className="tile is-parent">
                            <article className="tile is-child box">
                                <p className="content" style={styles.cardBody, styles.cardFive}>"{result.affirmation}"</p>
                            </article>
                        </div>
                        <div className="tile is-8 is-vertical">
                            <div className="tile">
                                <div className="tile is-parent">
                                    <article className="tile is-child box">
                                        <p className="subtitle" style={styles.cardBody, styles.cardSix} >"{result.affirmation}"</p>
                                    </article>
                                </div>
                                <div className="tile is-parent">
                                    <article className="tile is-child box">
                                        <p className="subtitle" style={styles.cardBody}> "{result.affirmation}"</p>
                                    </article>
                                </div>
                            </div>
                            <div className="tile is-parent">
                                <article className="tile is-child box">
                                    <p className="content" style={styles.cardBody, styles.cardEight}> "{result.affirmation}"</p>
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

