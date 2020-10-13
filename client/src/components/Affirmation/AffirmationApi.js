import React, { useEffect, useState } from "react";
import API from '../../lib/API'

const AffirmationsApi = props => {
    const [result, setResult] = useState([])

    useEffect(() => {
        API.Affirmations.getAffirmation()
            .then(({ data }) => setResult(data))

    }, [API.Affirmations])
    console.log(result.affirmation)

    return (
        <div>
            <p> "{result.affirmation}"</p>
        </div>
    )

}

export default AffirmationsApi