import React, { useState, use, useEffect } from "react";
import API from "../../lib/API";
import { Link } from "react-router-dom";

function Threads() {
  const [threads, setThreads] = useState({});

  useEffect(() => {
    loadThreads();
  }, []);

  function loadThreads() {
    API.getThreads()
      .then((res) => setThreads(res.data))
      .catch((err) => console.log(err));
  }

return ( 
    <h1>{threads}</h1>
)

};

export default Threads;