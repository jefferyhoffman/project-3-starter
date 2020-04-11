import React, { useState, use, useEffect } from "react";
import API from "../../lib/API";
import { Link } from "react-router-dom";
import Jumbotron from "../../components/Jumbotron";

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


  return (
    <div>
      <Jumbotron> 
        <Link to={"/thread/" + threads.id + "/" }>{threads.title}</Link>
        <p>{threads.body}</p>
      </Jumbotron>
    </div>
  );
}

export default Threads;
