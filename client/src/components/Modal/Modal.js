import React from 'react'

const styles = {
    position: 'fixed',
    left: '50%',
    top: '50%',
    padding: '100px',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    zIndex: 1000,
    
}
 const overLay = {
    position: 'fixed',
    left: '0',
    top: '0',
    right: '0',
    bottom: '0',
    zIndex: 1000,
    backgroundColor: 'rgba(0, 0, 0, .7)'
 }
 const button = {
    position: 'fixed',
    right: '2%',
    top: '2%',
 }

export default function Modal({ open, children, onClose}) {
    if (!open) return null
    return  (
        <>
        <div className="animate__animated animate__fadeIn animate__delay-0s" style={overLay}/>
        <div className="animate__animated animate__fadeIn animate__delay-0s" style ={styles}>
            <button style={button} onCLick={onClose}><svg width="1em" height="1em" viewBox="" class="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg></button>
            {children}
        </div>
        </>
       
    )
}
