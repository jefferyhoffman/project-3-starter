import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, Rating, Image, Responsive, Container, Button } from "semantic-ui-react";
import AuthContext from '../../contexts/AuthContext';
import API from '../../lib/API';


class ReviewForm extends Component {

    state = {
        id: "",
        review: "",
        user: ""
    }


}

export default ReviewForm