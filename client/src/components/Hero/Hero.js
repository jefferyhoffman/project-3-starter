import React from 'react'
import { Image,Row, Col } from 'react-bootstrap';
// import stance from '../../pages/Home/stance.jpg'
import clapping from '../../pages/Home/clapping.jpg'
import '../Hero/Hero.css'


function Hero (){
    return (
        <div className = "img-container">
            <Image src = {clapping} alt = "working out" className = "hero" width = "100%" height = "30%"/>
           <div className = "overlayText">Slay Your Dragon</div>
            <Row>
            <button className = "btn">Shop Mens</button>
            <button className = "btn2">Shop Womens</button>
            </Row>
        </div>

    )
}


export default Hero;