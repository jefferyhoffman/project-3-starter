import React, { Component } from 'react';
import '../BarKnowMore/bar.css'
import top5 from '../Images/top5.jpg';
import { Link } from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext';
import API from '../../lib/API';

import jigger from '../Images/jigger.jpg';
import shaker from '../Images/shaker.jpg';
import strainer from '../Images/strainer.jpg';
import spoon from '../Images/spoon.jpg';
import muddler from '../Images/muddler.jpg';
import knife from '../Images/knife.jpg';
import glass from '../Images/glass.jpg';
import citrus from '../Images/citrus.jpg';
// import jumbo from '../Images/jumbo.jpg';
// import jumbo1 from '../Images/jumbo1.jpg';
// import jumbo3 from '../Images/jumbo3.jpg';
// import jumbo4 from '../Images/jumbo4.jpg';
// import jumbo6 from '../Images/jumbo6.jpg';
// import jumbo11 from '../Images/jumbo11.jpg';

class Tools extends Component {
    render() {
        return (
            <>
                <div>
                    <div className='container-tools'>
                        <h2 className='pages-header'>Bar Tools</h2>
                        <div className='barpage'>
                            <div className="box">
                                {/* <Link to='/'> */}
                                <img src={jigger} alt="Drinks" />
                                {/* </Link> */}
                                <span>Jigger</span>
                            </div>
                            <div className="box">
                                {/* <Link to='/'> */}
                                <img src={shaker} alt="Drinks" />
                                {/* </Link> */}
                                <span>Shaker</span>
                            </div>
                            <div className="box">
                                {/* <Link to='/'> */}
                                <img src={strainer} alt="Drinks" />
                                {/* </Link> */}
                                <span>Strainer</span>
                            </div>
                            <div className="box">
                                {/* <Link to='/'> */}
                                <img src={spoon} alt="Drinks" />
                                {/* </Link> */}
                                <span>Bar Spoon</span>
                            </div>
                        </div>
                        <div className='barpage'>
                        <div className="box">
                                {/* <Link to='/'> */}
                                <img src={muddler} alt="Drinks" />
                                {/* </Link> */}
                                <span>Muddler</span>
                            </div>
                            <div className="box">
                                {/* <Link to='/'> */}
                                <img src={knife} alt="Drinks" />
                                {/* </Link> */}
                                <span>Channel Knife</span>
                            </div>
                            <div className="box">
                                {/* <Link to='/'> */}
                                <img src={glass} alt="Drinks" />
                                {/* </Link> */}
                                <span>Glasses</span>
                            </div>
                            <div className="box">
                                {/* <Link to='/'> */}
                                <img src={citrus} alt="Drinks" />
                                {/* </Link> */}
                                <span>Citrus Juicer</span>
                            </div>
                           
                        </div>

                    </div>
                </div>
            </>
        );
    }
}

export default Tools;
