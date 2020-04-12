import React, { useState, use, useEffect } from "react";
import API from "../../lib/API";
import { Link } from "react-router-dom";
import Jumbotron from "../../components/Jumbotron";
import { Input, TextArea, FormBtn } from "../../components/ThreadForm"

import "../Threads/Threads.css";

function Threads() {
  const [threads, setThreads] = useState([]);
  const [userInfo, setuserInfo] = useState({});
  const [formObject, setFormObject] = useState({});

  useEffect(() => { 
    API.Users.getMe(localStorage.getItem("token"))
      .then((res) => { 
        console.log(res.data)
        setuserInfo(res.data);
      })
      .catch((err) => console.error(err))
  }, []);

  function handleInputChange(event) { 
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  function handleFormSubmit(event) { 
    event.preventDefault();
    if (formObject.title && formObject.body) { 
      API.Threads.createThread({
        title: formObject.title,
        body: formObject.body,
        UserId: userInfo.id
      })
      .then(res => API.Threads.getThreads())
      .catch(err => console.log(err))
    }
  };



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
          {console.log(userInfo.id + "HIIIIIIIIIII")}
          { 
            threads.map((item, index) => (
              // <div className="thread" key={index}>{item.title}</div>
              // <Link to={"/thread/" + threads.id + "/" } key={item.id} className="thread">{threads.title}</Link>
              <div className="thread" key={item.id}>
                <a href={"/thread/"+ item.id}>{item.title}</a>
              </div>
            ))
          }
          <div>
            <form>
              <Input
                className="new-thread-title"
                onChange={handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <TextArea
                className="new-thread-body"
                onChange={handleInputChange}
                name="body"
                placeholder="Body (required)"
              />
           </form>
            <div className="submit-button">
              <FormBtn
                className="submit-thread"
                disabled={!(formObject.title && formObject.body)}
                onClick={handleFormSubmit}
              >
                Submit New Thread
              </FormBtn>
            </div>
          </div>
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
