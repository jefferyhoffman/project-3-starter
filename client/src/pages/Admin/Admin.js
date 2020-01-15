import React, { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";
import API from "../../lib/API";
import FlashMessage from "react-flash-message";

const Admin = () => {
    const { user, authToken } = useContext(AuthContext);
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState("select user")
    const [role, setRole] = useState("set role")
    const [submitted, setSubmitted] = useState(false)
    const [message, setMessage] = useState("")

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

    }

    const handleSub = (event) => {
        event.preventDefault()
        API.Users.updateRole(authToken, selectedUser, role).then(() => console.log("success"))
            .catch(err => console.log(err));
        API.Properties.create().then(response => {

            setMessage("Successfully registered user.");
            setSubmitted(true);

            setTimeout(()=>setSubmitted(false),5000);
        })
    }
    if (!user || user.role !== "Admin") {
        return <Redirect to="/" />
    };
    console.log(users)
    return (

        <div className="Login">



            <h1 className="admin">Hello Admin</h1>
            <form onSubmit={handleSub}>


                <select id="use" onChange={event => setSelectedUser(event.target.value)} value={selectedUser} name="setSelectedUser">
                    <option className="user" key={123452435} value="select user">Select User</option>
                    {users.map(currentUser => {
                        return (<option
                            key={currentUser._id}
                            value={currentUser._id}>
                            {currentUser.lastName}, {currentUser.firstName}
                        </option>)
                    })}

                </select>
                <select id="role" onChange={event => setRole(event.target.value)}>
                    <option key={1432345} value="set role">Set Role</option>
                    <option key={1657457} value="Client">Client</option>
                    <option key={287989} value="Employee">Employee</option>
                    <option key={36457} value="Admin">Admin</option>
                </select>
                <br />
                <input type="submit" className="submitBtn" />
                {submitted && (
                    <div className="row" style={{ zIndex: 10 }}>
                        <div
                            className="col centeredContent"
                            style={{ marginTop: "-90px" }}
                        >
                            <FlashMessage duration={5000}>
                                <div className="alert alert-success mb-3 flash" role="alert">
                                    {message}
                                </div>
                            </FlashMessage>
                        </div>
                    </div>
                    
                )}
            </form>
            



        </div>
        
    );
   
};

export default Admin;