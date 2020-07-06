import React, { Component } from 'react'

class Score extends Component{
state ={
    score:10
}
    render(){
        return(
            <div className="column is-one-quarter">
            <div className="box">
                <h1 className="is-size-1"> Score : {this.state.score}</h1>
            </div>
            </div>
        )
    }
}
 export default Score;