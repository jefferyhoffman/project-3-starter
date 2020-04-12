import React, { useState, use, useEffect } from "react";
import API from "../../lib/API";
import { Link } from "react-router-dom";
import Jumbotron from "../../components/Jumbotron";
import "../Threads/Threads.css";

function Threads() {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    console.log('useEffect');
    API.Threads.getThreads()
      .then((res) => {
        console.log('res', res);
        setThreads(res.data);
      })
      .catch((err) => console.error(err))
  }, []);

  return (
    <div>
      <div className="threads-heading">
        Threads
      </div>
      <div className="threads-panel">
        <div>
          { 
            threads.map((item, index) => (
              // <div className="thread" key={index}>{item.title}</div>
              // <Link to={"/thread/" + threads.id + "/" } key={item.id} className="thread">{threads.title}</Link>
              <div className="thread" key={item.id}>
                <a href={"/thread/"+ item.id}>{item.title}</a>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )

  // render();

  // function render() {
  //   return (
  //     <div className="test"> Hello Jamey</div>
  //   )
  // }

  // API.Threads.getThreads()
  //   .then((res) => {
  //     console.log('res', res.data);
  //     return render();
  //     // return (
  //     //   <ul>
  //     //   {

  //     //     // res.data.map((item, i) => (
  //     //     // <li>{item.title}</li>
  //     //     // ))
  //     //   }
  //     // </ul>
  //     // )
  //   })

  //   function render() {
  //     return (
  //       <div>Hello</div>
  //     )
  //   }



  // const [threads, setThreads] = useState(() => {
  //   API.Threads.getThreads()
  //     .then((res) => setThreads(res.data))
  //     .catch((err) => console.error(err))
  // });


  //Zack
  // const [threads, setThreads] = useState({});
  // useEffect(() => {
  //   loadThreads();
  // }, []);
  // function loadThreads() {
  //   API.Threads.getThreads()
  //     .then((res) => setThreads(res.data))
  //     .catch((err) => console.log(err));
  // };


  // return (
  //     <div>
  //       <div className="threadsTitleBox"> 
  //         <Link to={"/thread/" + threads.id + "/" }>{threads.title}</Link>
  //       </div>
  //       <div className="threadsDiv">
  //           <div className="threadsBody">
  //             <p>{threads.body}</p>
  //           </div>
  //       </div> 
  //     </div>
  // );
}

export default Threads;
