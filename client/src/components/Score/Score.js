import React, { Component } from 'react'
import './Score.css'
class Score extends Component{
state ={
    score:10
}
    render(){
        return(
            
            <div className="column is-1">
                <div class="tile is-ancestor">
                <div className="tile is-parent">
            <article className="tile is-child box scoreBox2">
            <article className="tile is-child box">
                <h1 className="is-size-5 has-text-centered" > <strong>Score: {this.state.score}</strong></h1>
                </article>
            </article>
            </div>
            </div>
            </div>
        )
    }
}
 export default Score;