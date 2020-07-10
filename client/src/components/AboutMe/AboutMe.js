import React, { useState , useEffect, useContext } from 'react'
import {whoContext} from '../../components/whoContext'
import axios from 'axios'
const AboutMe = () => {
    
    const {who} = useContext(whoContext)
    const [Chars,setChars] = useState([])
    const [me , setme] =useState("")
   


    useEffect(()=>{
        
        axios.get("api/characters").then((res)=>{
            console.log(res.data)
            const result = res.data.filter(obj => {
                return obj.name === who
              })
              setme(result)
        })

    },[who])




 return(
     <div className="column is-one-quarter">
<div className="box">
<p>{me.name}</p>
</div>
     </div>
 )

}

export default AboutMe