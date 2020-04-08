import React, {Component} from 'react';
import "./style.css";

class HomePage extends Component {
    render() {
        return (
            <div className='container'>
                <div className="red_background container">
                    <div className="jumbotron">
                        <div className="container">
                            <h1 className="display-4">Fluid jumbotron</h1>
                            <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;
