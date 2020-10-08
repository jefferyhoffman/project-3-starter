import React, { useContext } from "react";
import Form from "../../components/Form/Form";
import AuthContext from "../../contexts/AuthContext"
import API from "../../lib/API"

function Bill() {
    const user = useContext(AuthContext)
    const handleSub =(data)=>{
        console.log(data)
        API.Bills.create(user.authToken, data)
        .then(res=>console.log(res))
    }
    return (
        <div>
            
            <Form submit={handleSub} />
           
        </div>
    )
}


export default Bill;