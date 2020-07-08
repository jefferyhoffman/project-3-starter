import React, { Component } from 'react'

const questions = [
    {
    text:"What color is their hair"
    },
    {
    text:"test question 2"
    },
    {
    text:"test quesiton 3"
    },
    {
    text:"test quesiton 4"
    },
    {
    text:"test quesiton 5"
    },
]

class DropDown extends Component {

    handleAnswer(){

    }

    render() {
        return (
            <div className="column is-one-quarter">
                <div className="dropdown is-hoverable">
                    <div className="dropdown-trigger">
                        <button className="button dropdown-button is-rounded" aria-haspopup="true" aria-controls="dropdown-menu">
                            <span> Choose Your Question! </span>
                        </button>
                    </div>
                    <div className="dropdown-menu" id="dropdown-menu" role="menu">
                        <div className="dropdown-content">
                            {questions.map((question) => 
                             <a className="dropdown-item" href="/" onClick={this.handleAnswer}>{question.text}</a>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default DropDown