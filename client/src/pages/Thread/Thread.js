import React, { useState, use, useEffect } from "react";
import API from "../../lib/API";
import { Link } from "react-router-dom";
import Jumbotron from "../../components/Jumbotron";
import { Input, TextArea, FormBtn } from "../../components/ThreadForm";

function Threads() {
  const [threads, setThreads] = useState({});

  useEffect(() => {
    loadThreads();
  }, []);

  function loadThreads() {
    API.Threads.getThreads()
      .then((res) => setThreads(res.data))
      .catch((err) => console.log(err));
  };

  function handleInputChange(event) { 
      const { name, value } = event.target;
      setFormObject({...formObject, [name]: value})
  };

  function handleFormSubmit(event) { 
      event.preventDefault();
      if (formObject.title && formObject.body) { 
          API.Threads.createThread({
              title: formObject.title,
              body: formObject.body
          })
          .then(res => loadThreads())
          .catch(err => console.log(err));
      }
  }


  return (
    <div>
      <Jumbotron> 
        <Link to={"/thread/" + threads.id + "/" }>{threads.title}</Link>
        <p>{threads.body}</p>
      </Jumbotron>
      <Jumbotron>
          <h1>Create a new thread:</h1>
      </Jumbotron>
      
    </div>
  );
}

export default Threads;
