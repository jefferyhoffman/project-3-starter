import React, { useEffect, useState } from "react";
import API from '../../lib/API'

const styles = {
    card: {
        fontFamily: "'Playfair Display', serif",
        color: "black"
    }
}

const AffirmationsApi = props => {
    const [result, setResult] = useState([])

    useEffect(() => {
        API.Affirmations.getAffirmation()
            .then(({ data }) => setResult(data))

    }, [API.Affirmations])
    console.log(result.affirmation)

    return (
        <div>
            <p style={styles.card}> "{result.affirmation}"</p>
        </div>
    )

}

export default AffirmationsApi