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
        fontFamily:"'Great Vibes', cursive",
        fontSize: "60px",
        color: "white"
    },
    title: {
        fontSize: "20px"
    }
}

function Cards() {
    return (
        <section className="section">
                <div className="columns">
                    <div className="card column" style={styles.cardOne}>
                        <div style={styles.title}>Get on track with your</div>
                        <div className="card-body" style={styles.pTag}>Emotions
            </div>
            
                    </div>
                    <div className="card column">
                     {/*    <h5 className="card-title"></h5> */}
                    <img src="https://images.pexels.com/photos/697243/pexels-photo-697243.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="card-img-top" alt="" />
                    {/* <div className="card-body">
                    </div> */}
                </div>
                <div className="card column" style={styles.cardTwo}>
                    <h5 className="card-title"><strong>Daily Affirmation:</strong></h5>
                    <img src="" className="card-img-top" alt="" />
                    <div className="card-body"> Apply API for Daily Affirmations Here
              </div>
                </div>
            </div>
            <div className="columns">
                <div className="card column">
                    <h5 className="card-title"></h5>
                    <img src="https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="card-img-top" alt="" />
                    <div className="card-body">
                    </div>
                </div>
                <div className="card column" style={styles.cardThree}>
                    <h5 className="card-title"><strong>Resources:</strong></h5>
                    <img src="" className="card-img-top" alt="" />
                    <div className="card-body"> If you or someone you know is seeking help,
                    follow the link for resources. You can also use the chat box.
            </div>
                </div>
                <div className="card column">
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