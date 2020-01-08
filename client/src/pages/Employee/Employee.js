import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";
import Form from "../InputForm/index";

const Employee = () => {
    const { user }  = useContext(AuthContext);

    if (!user || user.role !== "Employee") {
        return <Redirect to = "/" />
    }

    return <Form />;
};

export default Employee;