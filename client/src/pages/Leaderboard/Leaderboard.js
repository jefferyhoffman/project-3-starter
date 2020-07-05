import React from 'react'

const Leaderboard = () => {
    return (
        <div>
        <h1>Leaderboard  🔥</h1>
        <table className="table is-striped">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Username</th>
                    <th scope="col">Score</th>
                    <th scope="col">Last Guess</th>
                </tr>
            </thead>
            <tbody>
            {/* Rendering scores dynamically */}
            <tr>
                <td>1</td>
                <td>helloworld</td>
                <td>132</td>
                <td>Bob</td>
            </tr>
            </tbody>
        </table>
        </div>
    )
}

export default Leaderboard;
