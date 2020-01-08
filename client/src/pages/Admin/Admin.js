import React, { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";
import API from "../../lib/API";

const Admin = () => {
    const { user } = useContext(AuthContext);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers()
    }, [])

    function loadUsers() {
        API.Users.getAll()
            // .then(res => setUsers(res.data.users))
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
    }

    if (!user || user.role !== "Admin") {
        return <Redirect to="/" />
    };

    return (


        <div>
        <h1>Hello Admin</h1>
        <div>
            {users}
        </div>
        </div>

    );
};

export default Admin