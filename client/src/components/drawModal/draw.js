import React, { useState} from "react"
import { Modal, Button } from 'react-bootstrap'
import "./style.css"

function DrawModal(props) {

  const [show, setShow] = useState(false)
  
  const handleClose = () => setShow(false)
  
  
  return (<>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Draw</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img className='card-img-top h-auto' src={props.image} alt={props.alt} />
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