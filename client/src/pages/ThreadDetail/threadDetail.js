import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, useParams } from 'react-router-dom';
import Jumbotron from "../../components/Jumbotron/index";
import { List, ListItem } from "../../components/List/index";
import API from "../../lib/API";

function ThreadDetail(props) { 
    const [thread, setThread] = useState({});

    const {id} = useParams()
    useEffect(() => { 
        API.Threads.getThread(id)
            .then(res => setThread(res.data))
            .catch(err => console.log(err));
    }, [])

    return (
        <div>
            <Jumbotron>
                <List>
                
                </List>
                
        <h1>Hi {console.log(thread)}</h1>
            </Jumbotron>
          
          {/* <p>{thread.body}</p> */}
        </div>
    );
}

export default ThreadDetail;