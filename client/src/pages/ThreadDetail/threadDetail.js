import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, useParams } from 'react-router-dom';
import Jumbotron from "../../components/Jumbotron/index";
import { List, Listitem } from "../../components/List/index";
import API from "../../lib/API";
import "../ThreadDetail/threadDetail.css";
import { Input, TextArea, FormBtn } from "../../components/ThreadForm";
import Replies from './Replies.png';
import Particles from 'react-particles-js';
import DeleteBtn from "../../components/DeleteReplyButton";

function ThreadDetail({ match }) { 
    const [thread, setThread] = useState({});
    const [replies, setReplies] = useState([]);
    const {id} = useParams();
    const [userInfo, setuserInfo] = useState({});
    const [formObject, setFormObject] = useState({});
    const [threadId, setThreadId] = useState([]);
    const [threadDate, setThreadDate] = useState([]);

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
        if (formObject.body) { 
          API.Reply.createReply({
            body: formObject.body,
            UserId: userInfo.id,
            ThreadId: threadId
          })
          .then(res => {
            // API.Reply.findAll();
            window.location.reload(true);
          })
          .catch(err => console.log(err))
        }
      };

    useEffect(() => {
        API.Threads.getThread(id)
            .then((res) => {
              for(let i =0; i < res.data.length; i++) { 
                console.log('res in ThreadDetail', res);
                console.log(res.data)
                setThreadId(res.data[i].id)
                setThread(res.data[i]);
                setThreadDate((res.data[i].createdAt).substring(5,10) + "-" + (res.data[i].createdAt).substring(0,4))
                setReplies(res.data[i].Replies);
            }})
            .catch(err => console.error(err))
    }, []);

    function deleteReply(id) {
      API.Reply.deleteReply(id)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }

    return (
      <div>
          <div className="Reply-heading">
        </div>
          <div className="thread-panel">
          <div className="thread">
          
            <div className="threadDetails">
              <div className="thread-title">Title: { thread.title } <br/>
                  </div>
              <div className="thread-body">Description: {thread.body}
                </div>
                  ({threadDate})
              </div>
          </div>              
            <div className="replies">
              <img src={Replies} alt='websitelogo' className='img-div'/>
            </div>
            <div>
              {replies.map((item, index) => (
              <div className="reply" key="item.id">
                  user: {item.User.email}<br/>
                  Description: {item.body}
                    {/* <DeleteBtn onClick={() => deleteReply(item.id)} /> */}                            
              </div>
              ))}
            </div>
          <div>
          <form>
              <Input
                className="new-thread-body"
                onChange={handleInputChange}
                name="body"
                placeholder="Description (required)"
              />
              <FormBtn
                className="submit-thread"
                disabled={!(formObject.body)}
                onClick={handleFormSubmit}
              >
                Submit A Reply
              </FormBtn>
            </form>
          </div>
        </div>
      </div>
    )

    // const [thread, setThread] = useState({});
    // const [reply, setReply] = useState({});
    // const [user, setUser] = useState({});

    // const {id} = useParams();

    // useEffect(() => { 
    //     API.Reply.getThread(id)
    //         .then(res => setThread(res.data[0]))
    //         .catch(err => console.log(err))
    // }, [])

    // useEffect(() => { 
    //     API.Reply.getThread(id)
    //         .then(res => setReply(res.data[0].Replies[0]))
    //         .catch(err => console.log(err))
    // }, [])

    // useEffect(() => {
    //     API.Reply.getThread(id)
    //     .then(res => setUser(res.data[0].Replies[0].User))
    //     .catch(err => console.log(err))
    // }, [])
    
    // return (

    //     <div>
    //         <div className="threadDetailsTitleBox">
    //             {thread.title}
    //         </div>
    //         <div className="threadDetailBox">
    //             {/* <Jumbotron> */}
    //                 <List>
    //                 </List>
    //             {/* <h1>{thread.title}{console.log(reply)}</h1> */}
    //             <p>{thread.body}</p>
    //             <p>{reply.body}</p>
    //             <p>{user.email}</p>
    //             {/* </Jumbotron> */}
    //         {/* <p>{thread.body}</p> */}
    //         </div>

    //     </div>
        
    // );
}

export default ThreadDetail;