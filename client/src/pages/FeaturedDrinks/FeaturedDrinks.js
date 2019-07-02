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
            <>
                <div>
                    <h1 className="pages-header">Drinks we Love!</h1>
                    <div className='row'>
                        <div className='col-featured-lg-3 col-md-4 col-sm-12 col-xs-12'>
                            <Link to='/jeffTheCodeGuru'>
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <div className='card-topflip'>
                                                <img src={top} className='card-img-top' alt={'featured-drink'}></img>
                                                <div className='card-body'>
                                                    <h4 className='card-title'>Jeff 'The Code Guru'</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flip-card-back">
                                            <strong><h4 className='card-title'>Jeff 'The Code Guru'</h4></strong>
                                            <p className='card-textflip'>Our mocha take on White Russian! In honour of our phenomenal 'Guru' Jeffery Hoffman, it's one of his favroite drink! Thank you Jeff for believing in us when we doubted ourselves!</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className='col-featured-lg-3 col-md-4 col-sm-12 col-xs-12'>
                            <Link to='/pineappleMartini'>
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <div className='card-topflip'>
                                                <img src={top2} className='card-img-top' alt={'featured-drink'}></img>
                                                <div className='card-body'>
                                                    <h4 className='card-title'>Pineapple Martini</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flip-card-back">
                                            <strong><h4 className='card-title'>Pineapple Martini</h4></strong>
                                            <p className='card-textflip'>Pineapple Infused Vodka Martini is one for connoisseurs who take their craft seriouly. Patience and hard work do pay off We say.</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className='col-featured-lg-3 col-md-4 col-sm-12 col-xs-12'>
                            <Link to='/babyGuinness'>
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <div className='card-topflip'>
                                                <img src={top4} className='card-img-top' alt={'featured-drink'}></img>
                                                <div className='card-body'>
                                                    <h4 className='card-title'>Baby Guinness</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flip-card-back">
                                            <strong><h4 className='card-title'>Baby Guinness</h4></strong>
                                            <p className='card-textflip'>Baby Guinness Shots are perfect blend of coffee and creme base liquor! We find it one of the best tasting shot whichs looks amazing cool.</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-featured-lg-3 col-md-4 col-sm-12 col-xs-12'>
                            <Link to='/kentuckyMule'>
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <div className='card-topflip'>
                                                <img src={top1} className='card-img-top' alt={'featured-drink'}></img>
                                                <div className='card-body'>
                                                    <h4 className='card-title'>Kentucky Mule</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flip-card-back">
                                            <strong><h4 className='card-title'>Kentucky Mule</h4></strong>
                                            <p className='card-textflip'>A bourbon take of Moscow Mule has exploded everywhere and is one the most popular drinks around. We think it's here to stay for a long time</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className='col-featured-lg-3 col-md-4 col-sm-12 col-xs-12'>
                            <Link to='/sherbetMimosa'>
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <div className='card-topflip'>
                                                <img src={top5} className='card-img-top' alt={'featured-drink'}></img>
                                                <div className='card-body'>
                                                    <h4 className='card-title'>Sherbet Mimosa</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flip-card-back">
                                            <strong><h4 className='card-title'>Sherbet Mimosa</h4></strong>
                                            <p className='card-textflip'>Sherbet Mimosa's are the best, perfect for any brunch occasion! You can make it with any color or flavor sherbet, We say it's a must try!</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className='col-featured-lg-3 col-md-4 col-sm-12 col-xs-12'>
                            <Link to='/oldFashioned'>
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <div className='card-topflip'>
                                                <img src={top3} className='card-img-top' alt={'featured-drink'}></img>
                                                <div className='card-body'>
                                                    <h4 className='card-title'>Old Fashioned</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flip-card-back">
                                            <strong><h4 className='card-title'>Old Fashioned</h4></strong>
                                            <p className='card-textflip'>Classy, timeless  and loved across generations. We can safely claim good 'old Old Fashioned is never gonna be out of style.</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default FeaturedDrinks;
