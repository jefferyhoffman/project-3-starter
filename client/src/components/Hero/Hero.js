import React from 'react'
import { Image } from 'react-bootstrap';
import stance from '../../pages/Home/stance.jpg'


function Hero (){
    return (
        <div>
            <Image src = {stance} alt = "working out" className = "hero" width = "100% " height = "100%"/>
        <hr className="dashed"></hr>
        </div>

    )
}


export default Hero;