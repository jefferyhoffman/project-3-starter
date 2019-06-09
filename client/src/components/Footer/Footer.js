import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Footer/footer.css';
import Logo from '../../pages/Images/Logo.png';





class Jumbotron extends Component {
    render() {
        return (
<<<<<<< HEAD
            <div className="footer">
                <div className="card">
                    <div className="card-header-footer">
                    {/* <img src={Logo} alt="My logo" className="logo"/> */}
                        <blockquote className="blockquote mb-0">
                            <footer className="blockquote-footer"><cite title="Source Title">Be your own Bartender</cite></footer>
                        </blockquote>
=======
            <div className="wrapper">
                <div className='footer'>
                    <div className='card'>
                        <div className='card-header-footer'>
                            <Link to='/'><img src={Logo} alt='My logo' className='logo' /></Link>
                            <blockquote className='blockquote mb-0'>
                                <footer className='blockquote-footer'><cite title='Source Title'>Be your own Bartender</cite></footer>
                            </blockquote>
                        </div>
>>>>>>> 0e8954dcc450aeb5567c93edb66b4dd1e9805c6a
                    </div>
                </div>
            </div>
        );
    }
}

export default Jumbotron;