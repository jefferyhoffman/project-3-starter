import React, {useEffect, useState} from "react";
import Menu from '../Menu/Menu';
import API from '../../lib/API'

const Affirmations = props => {
    const[result, setResult] = useState([])

    useEffect(() => {
        API.Affirmations.getAffirmation()
        .then(({data})=>setResult(data))

    }, [API.Affirmations])
    console.log(result.affirmation)

        return (
            <div>
                <ul>
        <li>{result.affirmation}</li>
                </ul>
            </div>
        )
    }


export default Affirmations;
