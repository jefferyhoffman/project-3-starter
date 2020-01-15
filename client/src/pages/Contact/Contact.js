import React, { Component, useState } from "react";
import API from "../../lib/API";
import FlashMessage from "react-flash-message";

const Contact = props => {
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userName, setUserName] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState("");

  const submitForm = event => {
    event.preventDefault();
    console.log("test");
    if (!userEmail || !userMessage || !userName || !userPhone) {
      setError("Please fill out all boxes!");
    } else {
      const holder = {
        message: userMessage,
        phoneNum: userPhone,
        name: userName,
        email: userEmail
      };
      API.Contact.send(holder).then(() => {
        setError("Your message has been sent!");
      });
      API.Properties.create().then(response => {
        setMessage("Successfully sent email.");
        setSubmitted(true);
      });
    }
  };
  return (
    <div className="Login">
      <div className="row">
        <div className="col ">
          {submitted && (
            <div className="row" style={{ zIndex: 10 }}>
              <div
                className="col centeredContent"
                style={{ marginTop: "-175px" }}
              >
                <FlashMessage duration={5000}>
                  <div className="alert alert-success mb-3 flash" role="alert">
                    {message}
                  </div>
                </FlashMessage>
              </div>
            </div>
          )}
          
          <div>
            <h1 className="admin">Contact Us!</h1>
            <form className="contactForm">
              
                <div>
                  {error ? <h1>{error}</h1> : null}
                  <div>
                  Email:{" "}
                  </div>
                  <input
                    className="email"
                    value={userEmail}
                    onChange={event => setUserEmail(event.target.value)}
                    type="email"
                    id="role"
                  />
                </div>

             
                <div>
                  <div>
                  Telephone #:{" "}
                  </div>

                  <input
                    className="email"
                    value={userPhone}
                    onChange={event => setUserPhone(event.target.value)}
                    id="role"
                    type="tel"
                    name="phone"
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  />
                </div>

               
                <div>
                  <div>
                  Name:{" "}
                  </div>
                  <input
                    className="email"
                    value={userName}
                    onChange={event => setUserName(event.target.value)}
                    type="text"
                    id="role"
                  />
                </div>

                

                <div>
                  <div>
                  Message:{" "}
                  </div>
                  <input
                    className="email"
                    value={userMessage}
                    onChange={event => setUserMessage(event.target.value)}
                    type="text"
                    id="role"
                  />
                </div>

                

                <div>
                  <input
                    className="email"
                    onClick={submitForm}
                    type="submit"
                    className="submitBtn"
                  />
                </div>
          
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
