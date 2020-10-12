import React, { useContext, useState, useEffect } from "react";
import MyCalendar from "../../components/MyCalendar";
import AuthContext from "../../contexts/AuthContext";
import API from "../../lib/API";
import { Link } from 'react-router-dom';
import './member.css'


function Member() {
    const user = useContext(AuthContext)
    const [bills, setBills] = useState([]);

    useEffect(() => {
        API.Bills.getMe(user.authToken)
            .then(res => setBills(res.data))
            .catch(err => console.log(err));
    }, [user.authToken])

    return (
        <div >

            <MyCalendar bills={bills} />

            <Link to="/bill"><button style={{marginTop: "30px" }} type="button" className="btn btn-primary">Add New Bill</button></Link>

        </div>
    )
}

export default Member;