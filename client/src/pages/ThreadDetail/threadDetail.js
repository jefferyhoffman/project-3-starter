import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, useParams } from 'react-router-dom';
import Jumbotron from "../../components/Jumbotron/index";
import { List, ListItem } from "../../components/List/index";
import API from "../../lib/API";

function ThreadDetail({ match }) { 
    const [thread, setThread] = useState({});
    const [reply, setReply] = useState({});
    const [user, setUser] = useState({});

    const {id} = useParams();

    useEffect(() => { 
        API.Threads.getThread(id)
            .then(res => setThread(res.data[0]))
            .catch(err => console.log(err))
    }, [])

    useEffect(() => { 
        API.Threads.getThread(id)
            .then(res => setReply(res.data[0].Replies[0]))
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        API.Threads.getThread(id)
        .then(res => setUser(res.data[0].Replies[0].User))
        .catch(err => console.log(err))
    }, [])
    
    return (
        
        <div>
            <Jumbotron>
                <List>
                
                </List>
                
    <h1>{thread.title}{console.log(reply)}</h1>
    <p>{thread.body}</p>
    <p>{reply.body}</p>
    <p>{user.email}</p>
            </Jumbotron>
          
          {/* <p>{thread.body}</p> */}
        </div>
    );
}

export default ThreadDetail;