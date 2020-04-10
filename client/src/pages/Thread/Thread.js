import React, { useState, use, useEffect } from "react";
import API from "../../lib/API";
import { Link } from "react-router-dom";

function Threads() {
  const [threads, setThreads] = useState({})

  useEffect(() => {
    loadThreads();
  }, []);

  function loadThreads() {
    API.Threads.getThreads()
      .then((res) => setThreads(res.data))
      .catch((err) => console.log(err));
  }

return ( 
<div>
<h1>{threads.title}</h1>
<p>{threads.body}</p>
</div>
)

};

export default Threads;