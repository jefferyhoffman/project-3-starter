import React, { Component } from 'react';
import '../BarKnowMore/bar.css'
import top5 from '../Images/top5.jpg';
import { Link } from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext';
import API from '../../lib/API';

import high from '../Images/high.jpg';
import cocktail from '../Images/cocktail.jpg';
import old from '../Images/old.jpg';
import collins from '../Images/collins.jpg';
import champ from '../Images/champ.jpg';
import brandy from '../Images/brandy.jpg';
import hurricane from '../Images/hurricane.jpg';
import pint from '../Images/pint.jpg';
import wine from '../Images/wine.jpg';
import cordial from '../Images/cordial.jpg';
import beer from '../Images/beer.jpg';
import coupette from '../Images/coupette.jpg';
import pilsner from '../Images/pilsner.jpg';
import parfait from '../Images/parfait.jpg';
import margarita from '../Images/margarita.jpg';
import martini from '../Images/martini.jpg';
import balloon from '../Images/balloon.jpg';
import coupe from '../Images/coupe.jpg';
// import jumbo from '../Images/jumbo.jpg';
// import jumbo1 from '../Images/jumbo1.jpg';
// import jumbo3 from '../Images/jumbo3.jpg';
// import jumbo4 from '../Images/jumbo4.jpg';
// import jumbo6 from '../Images/jumbo6.jpg';
// import jumbo11 from '../Images/jumbo11.jpg';


class Glass extends Component {
    render() {
        return (
            <>
                <div>
                    <div className='container-glass'>
                        <h2 className='pages-header'>Glass Gallery</h2>
                        <div className='barpage'>
                            <div className="box">
                                {/* <Link to='/'> */}
                                <img src={high} alt="Drinks" />
                                {/* </Link> */}
                                <span className="header1">Highball Glass</span>
                            </div>
                            <div className="box">
                                {/* <Link to='/'> */}
                                <img src={cocktail} alt="Drinks" />
                                {/* </Link> */}
                                <span>Cocktail Glass</span>
                            </div>
                            <div className="box">
                                {/* <Link to='/'> */}
                                <img src={old} alt="Drinks" />
                                {/* </Link> */}
                                <span>Old Fashioned Glass</span>
                            </div>
                            <div className="box">
                                {/* <Link to='/'> */}
                                <img src={collins} alt="Drinks" />
                                {/* </Link> */}
                                <span>Collins Glass</span>
                            </div>
                            <div className="box">
                                {/* <Link to='/'> */}
                                <img src={champ} alt="Drinks" />
                                {/* </Link> */}
                                <span> Champagne Flute</span>
                            </div>
                            <div className="box">
                                {/* <Link to='/'> */}
                                <img src={brandy} alt="Drinks" />
                                {/* </Link> */}
                                <span>Brandy Snifter</span>
                            </div>
                        </div>
                        <div className='barpage'>
                            <div className="box">
                                {/* <Link to='/'> */}
                                <img src={hurricane} alt="Drinks" />
                                {/* </Link> */}
                                <span>Hurricane Glass</span>
                            </div>
                            <div className="box">
                                {/* <Link to='/'> */}
                                <img src={pint} alt="Drinks" />
                                {/* </Link> */}
                                <span>Pint Glass</span>
                            </div>
                            <div className="box">
                                {/* <Link to='/'> */}
                                <img src={wine} alt="Drinks" />
                                {/* </Link> */}
                                <span>Wine Glass</span>
                            </div>
                            <div className="box">
                                {/* <Link to='/'> */}
                                <img src={cordial} alt="Drinks" />
                                {/* </Link> */}
                                <span>Cordial Glass</span>
                            </div>
                            <div className="box">
                                {/* <Link to='/'> */}
                                <img src={beer} alt="Drinks" />
                                {/* </Link> */}
                                <span>Beer Mug</span>
                            </div>
                            <div className="box">
                                {/* <Link to='/'> */}
                                <img src={coupette} alt="Drinks" />
                                {/* </Link> */}
                                <span> Coupette glass</span>
                            </div>
                        </div>
                        <div className='barpage'>
                            <div className="box">
                                {/* <Link to='/'> */}
                                <img src={pilsner} alt="Drinks" />
                                {/* </Link> */}
                                <span>Beer Pilsner</span>
                            </div>
                            <div className="box">
                                {/* <Link to='/'> */}
                                <img src={parfait} alt="Drinks" />
                                {/* </Link> */}
                                <span>Parfait Glass</span>
                            </div>
                            <div className="box">
                                {/* <Link to='/'> */}
                                <img src={margarita} alt="Drinks" />
                                {/* </Link> */}
                                <span>Margarita Glass</span>
                            </div>
                            <div className="box">
                                {/* <Link to='/'> */}
                                <img src={martini} alt="Drinks" />
                                {/* </Link> */}
                                <span> Martini Glass</span>
                            </div>
                            <div className="box">
                                {/* <Link to='/'> */}
                                <img src={balloon} alt="Drinks" />
                                {/* </Link> */}
                                <span>Balloon Glass</span>
                            </div>
                            <div className="box">
                                {/* <Link to='/'> */}
                                <img src={coupe} alt="Drinks" />
                                {/* </Link> */}
                                <span>Coupe Glass</span>
                            </div>
                        </div>

                    </div>
                </div>
            </>
        );
    }
}

export default Glass;
