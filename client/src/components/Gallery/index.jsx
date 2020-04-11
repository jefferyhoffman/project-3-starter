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
        if(counter > 0) {
            const t = setTimeout(() => setCounter(counter - 1), 1000)
            if(show === false) {
                clearTimeout(t)
            }
        }
    }, [counter]);

    useEffect(() => {
        if (counter === 0) {
            handleClose();
        }
    })

    return (
        <div>
            <div className='image-holder'>
                {<img className='image' src={props.images}/>}
                <div className='btns'>
                    <button 
                        className='invis-btn'
                        onClick={() => {handleShow(30)}}
                    >
                        30s
                    </button>
                    <button        
                        className='invis-btn'
                        onClick={() => {handleShow(60)}}
                    >
                        60s
                    </button>
                    <button 
                        className='invis-btn'
                        onClick={() => {handleShow(90)}}
                    >90s</button>
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
            </Modal>
        </div>
    )
}

export default Gallery;