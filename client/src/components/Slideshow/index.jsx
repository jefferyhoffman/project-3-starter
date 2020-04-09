import React from 'react';
import { Carousel } from 'react-bootstrap';

function Slideshow(props) {
    return (
        <Carousel interval={props.interval}>
            {props.images.map((slide, index) => 
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide}
                        alt='timed slide'
                    />
                </Carousel.Item>)}
        </Carousel>
    )
}

export default Slideshow;