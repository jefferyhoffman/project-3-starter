import React, { useContext, useEffect } from "react";
import MyCalendar from "../../components/MyCalendar";
import AuthContext from "../../contexts/AuthContext";
import API from "../../lib/API";
import { Link } from 'react-router-dom';

function Member() {
    const user = useContext(AuthContext)
    useEffect(()=>{
        API.Bills.getMe(user.authToken)
        .then(res=>console.log(res.data))
    },[user.authToken])
    return (
        <div>
            <Link to="/bill"><button type="button" className="btn btn-primary">Add New Bill</button></Link>
        
            <MyCalendar />
        </div>
    )
}

export default Member;