import React, { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";
import API from "../../lib/API";

const Admin = () => {
    const { user,authToken } = useContext(AuthContext);
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState("select user")
    const [role, setRole] = useState("set role")
    useEffect(() => {
        loadUsers()
    }, [])

    function loadUsers() {
        API.Users.getAll()
            // .then(res => setUsers(res.data.users))
            .then(res => {
                console.log(res.data)
                setUsers(res.data.users)
            }
            )
            .catch(err => console.log(err));
    }

    const handleSub = (event) => {
        event.preventDefault()
        API.Users.updateRole(authToken, selectedUser, role).then(()=>console.log("success"))
    }
    if (!user || user.role !== "Admin") {
        return <Redirect to="/" />
    };
    console.log(users)
    return (

        <div className="Login">
            <div className="container">

                <h1>Hello Admin</h1>
                <form onSubmit={handleSub}>


                    <select id="use" onChange={event=> setSelectedUser(event.target.value)} value={selectedUser} name="setSelectedUser">
                    <option key={123452435} value="select user">select user</option>
                        {users.map(currentUser => {
                            return (<option
                                key={currentUser._id}
                                value={currentUser._id}>
                                {currentUser.lastName}, {currentUser.firstName}
                            </option>)
                        })}

                    </select>
                    <select id="role" onChange={event=>setRole(event.target.value)}>
                        <option key={1432345} value="set role">set role</option>
                        <option key={1657457} value="User">Client</option>
                        <option key={287989} value="Employee">Employee</option>
                        <option key={36457} value="Admin">Admin</option>
                    </select>
                    <br />
                    <input type="submit" />
                </form>

            </div>

        </div>
    );
};

export default Admin