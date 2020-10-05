import React from 'react'
import { Image } from 'react-bootstrap';
// import stance from '../../pages/Home/stance.jpg'
import clapping from '../../pages/Home/clapping.jpg'


function Hero (){
    return (
        <div>
            <Image src = {clapping} alt = "working out" className = "hero" width = "100%" height = "30%"/>
       
        </div>

    )
}


export default Hero;