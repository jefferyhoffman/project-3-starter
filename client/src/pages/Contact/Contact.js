import React, { Component, useState } from 'react';
import API from '../../lib/API';
const Contact = (props) => {
  const [userEmail, setUserEmail] = useState("")
  const [userPhone, setUserPhone] = useState("")
  const [userName, setUserName] = useState("")
  const [userMessage, setUserMessage] = useState("")
  const [error, setError] = useState("")
  const submitForm = (event) => {
    event.preventDefault()
    console.log('test')
    if (!userEmail || !userMessage || !userName || !userPhone) {
      setError("Please fill out all boxes!")
    } else {
      const holder = {
        message: userMessage,
        phoneNum: userPhone,
        name: userName,
        email: userEmail
      }
      API.Contact.send(holder).then(() => {
        setError("Your message has been sent!")
      })
    }
  }
  return (
    <div className='Login'>
      <div className='row'>
        <div className='col contactForm'>

          <h1 className="admin">Contact Us!</h1>
      <form className="contactForm">
        {error ? <h1>{error}</h1> : null}
        Email: <input className="email" value={userEmail} onChange={(event) => setUserEmail(event.target.value)} type="email" id="role" /><br />
        Telephone #: <input className="email" value={userPhone} onChange={(event) => setUserPhone(event.target.value)}id="role" type="tel" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" /><br />
        Name: <input className="email" value={userName} onChange={(event) => setUserName(event.target.value)} type="text" id="role" /><br />
        Message: <input className="email" value={userMessage} onChange={(event) => setUserMessage(event.target.value)} type="text" id="role" /><br />
        <input className="email" onClick={submitForm} type="submit"className="submitBtn" />
        </form>
      </div>
    </div>
      </div >

    );
  
}

export default Contact;