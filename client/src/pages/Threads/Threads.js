import React, { useState, use, useEffect } from "react";
import API from "../../lib/API";
import { Link } from "react-router-dom";
import Jumbotron from "../../components/Jumbotron";
import { Input, TextArea, FormBtn } from "../../components/ThreadForm"
import Particles from 'react-particles-js';
import "../Threads/Threads.css";
import Threadsimage from './Threads.png';
import Threadsimage2 from './Threads2.png';

// import { faHome } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

  var { DateTime } = require("luxon");
const Date = DateTime.local(); 


  return (
    <div className="container-div">
      <div className="particles">
        <Particles 
        
        // params={{
        //  particles: {
        //    shape: {
        //      type: "image",
        //      image: {
        //       src: "music-icon-14-16.png",
        //       height: 20,
        //       width: 20,
        //     }
        //      }
        //  }
        // }}
        
        
        />
      </div>
    






      <div>
      <div className="threads-holder">
      <img src={Threadsimage2} alt='websitelogo' className='img-div'/>
      </div>
      <div className="threads-panel">
        <div> 
          { 
            threads.map((item, index) => (
              // <div className="thread" key={index}>{item.title}</div>
              // <Link to={"/thread/" + threads.id + "/" } key={item.id} className="thread">{threads.title}</Link>
              <div className="thread-threads" key={item.id}>
                <div className="item-id-title-div">
                <a href={"/thread/"+ item.id} className="href-link">{item.title}</a>
                </div>
            <p>Thread Created: {(item.createdAt).substring(5,10)}-{((item.createdAt).substring(0,4))}</p>
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
                placeholder="Description (required)"
              />
           </form>
            <div className="submit-button">
              <FormBtn
                className="submit-thread"
                disabled={!(formObject.title && formObject.Description)}
                onClick={handleFormSubmit}
              >
                Submit New Thread
              </FormBtn>
            </div>
          </div>
        </div>
      </div>
    </div>










    </div>


  )
}

export default Threads;
