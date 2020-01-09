import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";
import Form from "../InputForm/index";
import API from "../../lib/API";



const Employee = () => {
    const { user } = useContext(AuthContext);
    const [address, setAddress] = useState("");
    const [date, setDate] = useState(new Date().toISOString().slice(0, 10).replace(/-/g, "-"));
    const [task, setTask] = useState("");


    const handleSubmit = event => {
        event.preventDefault();
        console.log("hey");


        API.Properties.create(address, task, date).then(response => {
            setAddress("");
            setDate(new Date().toISOString().slice(0, 10).replace(/-/g, "-"));
            setTask("");

        })
    }

    if (!user || user.role !== "Employee") {
        return <Redirect to="/" />
    }

    return <div className="employee"><h1>New Property Form</h1>
        <form onSubmit={handleSubmit}>
            <label>
                Address:
        <input type="text" placeholder="123 State St." value={address} onChange={(event) => setAddress(event.target.value)} />
            </label>
            <label>
                Date:
        <input type="date" placeholder="#" value={date} onChange={(event) => setDate(new Date(event.target.value).toISOString().slice(0, 10).replace(/-/g, "-"))} />
            </label>
            <label>
                Task:
        <input type="text" placeholder="#" value={task} onChange={(event) => setTask(event.target.value)} />
            </label>
            <button type="submit" value="Submit New Property" />
        </form>
    </div>;
};

export default Employee;