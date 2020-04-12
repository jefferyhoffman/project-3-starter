import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, useParams } from 'react-router-dom';
import Jumbotron from "../../components/Jumbotron/index";
import { List, ListItem } from "../../components/List/index";
import API from "../../lib/API";
import "../ThreadDetail/threadDetail.css";

function ThreadDetail({ match }) { 
    const [thread, setThread] = useState({});
    const [replies, setReplies] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        API.Threads.getThread(id)
            .then((res) => {
                console.log('res in ThreadDetail', res);
                setThread(res.data[0]);
                setReplies(res.data[0].Replies);
            })
            .catch(err => console.error(err))
    }, []);

    return (
        <div>
            <div className="threads-heading">
                Thread
            </div>
            <div className="thread-panel">
                <div className="thread">
                    <div className="thread-title">Thread Details:</div>
                    <div className="threadDetails">
                        Title: { thread.title } <br/>
                        Body: {thread.body}
                    </div>
                    <div className="replies">Replies:</div>
                    <div>
                        {replies.map((item, index) => (
                        <div className="reply" key="item.id">
                            User: {item.User.email}<br/>
                            Body: {item.body}
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )

    // const [thread, setThread] = useState({});
    // const [reply, setReply] = useState({});
    // const [user, setUser] = useState({});

    // const {id} = useParams();

    // useEffect(() => { 
    //     API.Threads.getThread(id)
    //         .then(res => setThread(res.data[0]))
    //         .catch(err => console.log(err))
    // }, [])

    // useEffect(() => { 
    //     API.Threads.getThread(id)
    //         .then(res => setReply(res.data[0].Replies[0]))
    //         .catch(err => console.log(err))
    // }, [])

    // useEffect(() => {
    //     API.Threads.getThread(id)
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