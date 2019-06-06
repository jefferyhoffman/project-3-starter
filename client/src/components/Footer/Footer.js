import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import "../Footer/footer.css";




class Jumbotron extends Component {
    render() {
        return (
            <div className="footer">
                <div className="card">
                    <div className="card-header-footer">
                        DRINKSTATION
                        <blockquote className="blockquote mb-0">
                            <p>Your Ultimate Stop for Drinks</p>
                            <footer className="blockquote-footer"><cite title="Source Title">Be your own Bartender</cite></footer>
                        </blockquote>
                    </div>
                </div>
            </div>
        );
    }
}

export default Jumbotron;