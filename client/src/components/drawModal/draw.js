import React, { useState} from "react"
import { Modal, Button } from 'react-bootstrap'
import "./style.css"

function DrawModal(props) {

  const [show, setShow] = useState(false)
  
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  
  return (<>
          <button onClick={handleShow} className="btn btn">Draw Me</button>
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Draw</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img className='card-img-top' src={props.image} alt={props.caption} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    
  </>
  )
}
export default DrawModal