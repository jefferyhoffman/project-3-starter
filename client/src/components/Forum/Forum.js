import React from 'react';
import Axios from 'axios';

class Forum extends React.Component{
    state={

    };

    componentDidMount = () => {

    };

    getForumPost = () =>{
        axios.get('/api')
        .then((response) => {
            const data = response.data;
            this.setState({posts:data});
            console.log("Data Submitted");
        })
        .catch(() => {
            console.log("error posting");
        });
    }
    handleChange = ({ target }) => {

    };
}