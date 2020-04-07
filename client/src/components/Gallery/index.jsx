import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap'
import './style.css'

function Gallery(props) {

    const [show, setShow] = useState(false);

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
                        onClick={handleShow}
                    >
                        Draw!
                    </button>
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img className='card-img-top' src={props.images[0]} alt="gallery"/>
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