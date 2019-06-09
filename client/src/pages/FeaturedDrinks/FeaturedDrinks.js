import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../FeaturedDrinks/featureddrinks.css'

import top from '../Images/top.jpg';
import top5 from '../Images/top5.jpg';
import top1 from '../Images/top1.jpg';
import top2 from '../Images/top2.jpg';
import top3 from '../Images/top3.jpg';
import top4 from '../Images/top4.jpg';

class FeaturedDrinks extends Component {
    render() {
        return (
            <div>
                   <h1>Drinks we Love!</h1>
                        <div className='row'>
                            <div className='col-featured-lg-3 col-md-4 col-sm-12 col-xs-12'>
                                    <Link to='/jeffTheCodeGuru'><button>
                                        <div className='card-top'>
                                        <img src={top} className='card-img-top' alt={'featured-drink'}></img>
                                        <div className='card-body'>
                                            <h5 className='card-title'>Jeff 'The Code Guru'</h5>
                                            <p className='card-text'>This drink has exploded everywhere being one the most popular drinks around. We think it's here to stay for a long time</p>
                                        </div>
                                    </div>
                                </button></Link>
                            </div>
                            <div className='col-featured-lg-3 col-md-4 col-sm-12 col-xs-12'>
                                <Link to='/pineappleMartini'><button>
                                    <div className='card-top'>
                                    <img src={top2} className='card-img-top' alt={'featured-drink'}></img>
                                    <div className='card-body'>
                                        <h5 className='card-title'>Pineapple Martini</h5>
                                        <p className='card-text'>Pineapple Infused Vodka Martini is one for connoisseurs who take their craft seriouly. Patience and hard work do pay off We say.</p>
                                    </div>
                                </div>
                                </button></Link>
                            </div>
                            <div className='col-featured-lg-3 col-md-4 col-sm-12 col-xs-12'>
                                <Link to='/babyGuinness'><button>
                                    <div className='card-top'>
                                    <img src={top4} className='card-img-top' alt={'featured-drink'}></img>
                                    <div className='card-body'>
                                        <h5 className='card-title'>Baby Guinness</h5>
                                        <p className='card-text'>Baby Guinness Shots are perfect blend of coffee and creme base liquor! We find it one of the best tasting shot whichs looks amazing cool.</p>
                                    </div>
                                </div>
                                </button></Link>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-featured-lg-3 col-md-4 col-sm-12 col-xs-12'>
                                    <Link to='/kentuckyMule'><button>
                                        <div className='card-top'>
                                        <img src={top1} className='card-img-top' alt={'featured-drink'}></img>
                                        <div className='card-body'>
                                            <h5 className='card-title'>Kentucky Mule</h5>
                                            <p className='card-text'>A bourbon take of Moscow Mule has exploded everywhere and is one the most popular drinks around. We think it's here to stay for a long time</p>
                                        </div>
                                    </div>
                                </button></Link>
                            </div>
                            <div className='col-featured-lg-3 col-md-4 col-sm-12 col-xs-12'>
                                <Link to='/sherbetMimosa'><button>
                                    <div className='card-top'>
                                    <img src={top5} className='card-img-top' alt={'featured-drink'}></img>
                                    <div className='card-body'>
                                        <h5 className='card-title'>Sherbet Mimosa</h5>
                                        <p className='card-text'>Pineapple Infused Vodka Martini is one for connoisseurs who take their craft seriouly. Patience and hard work do pay off We say.</p>
                                    </div>
                                </div>
                                </button></Link>
                            </div>
                            <div className='col-featured-lg-3 col-md-4 col-sm-12 col-xs-12'>
                                <Link to='/oldFashioned'><button>
                                    <div className='card-top'>
                                    <img src={top3} className='card-img-top' alt={'featured-drink'}></img>
                                    <div className='card-body'>
                                        <h5 className='card-title'>Old Fashioned</h5>
                                        <p className='card-text'>Classy, timeless  and loved across generations. We can safely claim good 'old Old Fashioned is never gonna be out of style.</p>
                                    </div>
                                </div>
                                </button></Link>
                            </div>
                        </div>
                    </div>
             
        );
    }
}

export default FeaturedDrinks;
