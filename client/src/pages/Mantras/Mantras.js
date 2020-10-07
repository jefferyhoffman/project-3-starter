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
    cardFour: {
        backgroundColor: "#8D7183"
    },
    cardFive: {
        backgroundColor: "#8D7183"
    },
    cardSix: {
        backgroundColor: "#8D7183"
    }
}

function Mantras() {
    return (
        <section className="section">

            <div className="columns">
                <div className="card column" style={styles.cardOne}>
                    <h5 className="card-title"><strong>Did you know that...</strong></h5>
                    <img src="" className="card-img-top" alt="" />
                    <div className="card-body"> "My mind is brilliant. My body is healthy.
                    My spirit is tranquil."
                    </div>
                </div>
                <div className="card column" style={styles.cardTwo}>
                    {/*    <h5 className="card-title"></h5> */}
                    <img src="https://images.pexels.com/photos/697243/pexels-photo-697243.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="card-img-top" alt="" />
                    <div className="card-body">"I create my own path and walk it with joy."
                    </div>
                </div>
                <div className="card column" style={styles.cardThree}>
                    <h5 className="card-title"><strong>Daily Affirmation:</strong></h5>
                    <img src="" className="card-img-top" alt="" />
                    <div className="card-body"> "My positive thoughts guide me to new heights"
                    </div>
                </div>
            </div>
            <div className="columns">
                <div className="card column" style={styles.cardFour}>
                    <h5 className="card-title"></h5>
                    <img src="https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="card-img-top" alt="" />
                    <div className="card-body">"I am conquering my feras and becoming stronger each day."
                    </div>
                </div>
                <div className="card column" style={styles.cardFive}>
                    <h5 className="card-title"><strong>Resources:</strong></h5>
                    <img src="" className="card-img-top" alt="" />
                    <div className="card-body"> "I will have a good day, because it's my choice."
                    </div>
                </div>
                <div className="card column" style={styles.cardSix}>
                    <h5 className="card-title"></h5>
                    <img src="https://images.pexels.com/photos/2531353/pexels-photo-2531353.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="card-img-top" alt="" />
                    <div className="card-body"> "My potential is limitless, and I choose where to spend my energy."
                    </div>
                </div>
            </div>

        </section>

    )
}

export default Mantras;