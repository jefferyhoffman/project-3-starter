import React from "react";
import { Link } from "react-router-dom";
import "../PostIt_Post/PostPostIt.css";


function Button(props) {
    const URL = props.type + "/" + props.id;
    return(
        <btn className="PostPostIt_btn btn">
            <Link to={URL}>
                More</Link>
            </btn>
    )
}

export default Button;