import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap'
import Slideshow from '../Slideshow'
import './style.css'

function Gallery(props) {

    const [show, setShow] = useState(false);
    const [interval, setInterval] = useState(30000);

    const handleTime = time => {
        setInterval(time)
        console.log(interval)
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <div className='card gallery h-100'>
                <img className='card-img-top' src={props.images[0]} alt="gallery"/>
                <div className='card-body'>
                    <p className='card-text'>{props.name}</p>
                    <button 
                        className='btn btn-dark' 
                        num={props.num}
                        onClick={() => {handleTime(30);handleShow();}}
                    >
                        30 Seconds
                    </button>
                    <button 
                        className='btn btn-dark' 
                        num={props.num}
                        onClick={() => {handleTime(5000);handleShow();}}
                    >
                        60 Seconds
                    </button>
                    <button 
                        className='btn btn-dark' 
                        num={props.num}
                        onClick={() => {handleTime(50000);handleShow();}}
                    >
                        90 Seconds
                    </button>
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Slideshow images={props.images} interval={interval}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Gallery;