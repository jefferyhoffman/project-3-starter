import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Footer/footer.css';
import Logo from '../../pages/Images/Logo.png';





class Footer extends Component {
    render() {
        return (
                <div className='footer'>
                    <div className='card'>
                        <div className='card-header-footer'>
                            <Link to='/'><cite title='Source Title'>DRINKSTATION </cite><img src={Logo} alt='My logo' className='footer-logo' />
                            <cite title='Source Title'>Be your own Bartender </cite>
                            </Link>
                        </div>
                    </div>
                </div>
        );
    }
}

export default Footer;