import React, { useState, useEffect } from "react"
import { Modal, Button } from 'react-bootstrap'
import "./style.css"

function Artistcard(props) {

  const [show, setShow] = useState(false)

  const [timer, setTimer] = useState(1)



  const handleClose = () => setShow(false)

  const handleShow = () => {
    setShow(true)
  }
  // useEffect(() => {
  //   const counter = timer > 0 && setInterval(() => setTimer(timer + 1), 1000)
  //   return () => clearInterval(counter)
  // }, [timer])


  return (<>
    <div className="col-3">

      <div className="card w-auto">
        <div className="test">
          <img src={props.image} className="card-img-top" alt={props.title}></img>
            <h2 className="hover-title">{props.title}</h2>
            <p className="hover-p">{props.caption}</p>

        </div>
        {/* <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text"> {props.caption}</p>
        </div> */}
        <ul className="list-group list-group-flush">
          {/* <li className="list-group-item">Artist:<a href="#" className="card-link">{props.artist}</a></li> */}
          <li className="list-group-item"><button onClick={handleShow} className="btn btn">Draw Me</button></li>
        </ul>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Draw</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img className='card-img-top h-100' src={props.image} alt={props.caption} />
        </Modal.Body>
        <Modal.Footer>
          <div className="timer" >Time spent drawing:{timer}</div>
          <Button variant="dark" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  </>
  )
}
export default Artistcard