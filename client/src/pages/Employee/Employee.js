import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";

const Employee = () => {
    const { user }  = useContext(AuthContext);

    if (!user || user.role !== "Employee") {
        return <Redirect to = "/" />
    }

    return <h1>Hello Employee</h1>;
};

export default Employee