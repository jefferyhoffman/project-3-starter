import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";
import Form from "../InputForm/index";
import API from "../../lib/API";
import FlashMessage from "react-flash-message";



const Employee = () => {
    const { user } = useContext(AuthContext);
    const [address, setAddress] = useState("");
    const [date, setDate] = useState(new Date().toISOString().slice(0,10).replace(/-/g, "-"));
    const [task, setTask] = useState("");
    const [submitted, setSubmitted] = useState(false)
    const [message, setMessage] = useState("")

    const handleSubmit = event => {
        event.preventDefault();
        console.log("hey");
        console.log()

        API.Properties.create(address, task, date).then(response => {
            setAddress("");
            setDate(new Date().toISOString().slice(0, 10).replace(/-/g, "-"));
            setTask("");
            setMessage("Successfully submitted work")
            setSubmitted(true)
        })
    }

    if (!user || user.role !== "Employee") {
        return <Redirect to="/" />
    }
    console.log(date, '<=== date')
    return <div className="employee"><h1>New Property Form</h1>
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
        <form onSubmit={handleSubmit}>
            <label className="employeeLabel">
                Address:
        <input className="empInput"type="text" placeholder="123 State St." value={address} onChange={(event) => setAddress(event.target.value)} />
            </label>
            <label className="employeeLabel">
                Date:
        <input className="empInput" type="date" placeholder="#" value={date} onChange={(event) => setDate(new Date(event.target.value).toISOString().slice(0, 10).replace(/-/g, "-"))} />
            </label>
            <label className="employeeLabel">
                Task:
        <input className="empInput" type="text" placeholder="" value={task} onChange={(event) => setTask(event.target.value)} />
            </label>
            <button className="empButton" type="submit" value="Submit New Property"> Submit New Property </button>
        </form>
    </div>;
};

export default Employee;