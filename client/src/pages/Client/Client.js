import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";

const Client = () => {
    const { user }  = useContext(AuthContext);
    
    if (!user || user.role !== "Client") {
        return <Redirect to = "/" />
    }

    return <h1>Welcome Back</h1>;
};

export default Client