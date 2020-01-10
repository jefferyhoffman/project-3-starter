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
    <div className='Services Login'>
      <div className='row'>
        <div className='col'>

          <h1>Contact Us!</h1>
     
        {error ? <h1>{error}</h1> : null}
        Email: <input value={userEmail} onChange={(event) => setUserEmail(event.target.value)} type="email" /><br />
        Telephone #: <input value={userPhone} onChange={(event) => setUserPhone(event.target.value)} type="tel" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" /><br />
        Name: <input value={userName} onChange={(event) => setUserName(event.target.value)} type="text" /><br />
        Message: <input value={userMessage} onChange={(event) => setUserMessage(event.target.value)} type="text" /><br />
        <input onClick={submitForm} type="submit" />
      </div>
    </div>
      </div >

    );
  
}

export default Contact;