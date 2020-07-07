import React, { Component } from "react";

import Gravatar from "react-gravatar";
import AuthContext from "../../contexts/AuthContext";

class Profile extends Component {
    static contextType = AuthContext;

    state ={

    }

    render() {
        const { user } = this.context;

        return(
            <div>
                <h1>This should be the user data</h1>
                <p>{user}</p>
            </div>
        )
    }
}

export default Profile;
