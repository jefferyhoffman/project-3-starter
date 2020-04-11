import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap'
import './style.css'

function Gallery(props) {

    const [show, setShow] = useState(false);
    const [counter, setCounter] = useState();

    const handleClose = () => setShow(false);
    const handleShow = (seconds) => {
        setShow(true);
        setCounter(seconds)
    }

    useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000)
    }, [counter]);

    useEffect(() => {
        if (counter === 0) {
            handleClose();
        }
    })

    return (
        <div>
            {/* <div className='card gallery h-100'>
            <img className='card-img-top' src={props.images} alt="gallery"/>  
                <div className='card-body'>
                    <p className='card-text'>{props.name}</p>
                    <button 
                        className='modern-btn' 
                        onClick={() => {handleShow(1)}}
                    >
                        1 Seconds
                    </button>
                    <button 
                        className='modern-btn' 
                        onClick={() => {handleShow(5)}}
                    >
                        5 Seconds
                    </button>
                    <button 
                        className='modern-btn' 
                        onClick={() => {handleShow(10)}}
                    >
                        10 Seconds
                    </button>
                </div>
            </div> */}

            <div className='image-holder'>
                {<img className='image' src={props.images}/>}
                <div className='btns'>
                    <button 
                        className='invis-btn'
                        onClick={() => {handleShow(30)}}
                    >
                        30s
                    </button>
                    <button className='invis-btn'>60s</button>
                    <button className='invis-btn'>90s</button>
                </div>
            </div>

            <Modal className='modalmodal' show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className='col-11 text-center'>
                        <p>{counter}</p>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        <img 
                            className="d-block w-100"
                            src={props.images}
                            alt='timed slide'
                        />
                </Modal.Body>
                <Modal.Footer className='col-12 text-center'>
                    <Button variant="dark" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Gallery;