import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";

const Admin = () => {
    const { user }  = useContext(AuthContext);
    
    if (!user || user.role !== "Admin") {
        return <Redirect to = "/" />
    }

    return <h1>Hello Admin</h1>;
};

export default Admin