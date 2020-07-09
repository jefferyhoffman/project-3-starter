import React, {useState, useEffect} from 'react'
import API from '../../lib/API'

const Leaderboard = () => {
  
    const [scores, setScores] = useState([])
    useEffect(()=>{
        API.Scores.getAll()
        .then(scr=>{
            console.log(scr)
            setScores(scr.data.sort((a,b)=>b.score-a.score))
        })
    },[])
    return (
        <div>
        <h1>Leaderboard  🔥</h1>
        {scores.length ?(
        <table className="table is-striped">
            <thead>
                <tr>
                    <th scope="col">Rank</th>
                    <th scope="col">Username</th>
                    <th scope="col">Score</th>
                    <th scope="col">Last Guess</th>
                </tr>
            </thead>
            <tbody>
            {/* Rendering scores dynamically */}
            {scores.map((score, rank)=>(
            <tr key={score._id}>
                <td>{rank+1}</td>
                <td>{score.username}</td>
                <td>{score.highScore}</td>
                <td><img src={score.lastGuess} alt={`${score.username} last guess`} style={{'width':25}}/></td>
            </tr>

            ))}
            </tbody>
        </table>
        ):(<h1>No highscores!</h1>)}
        </div>
    )
}

export default Leaderboard;
