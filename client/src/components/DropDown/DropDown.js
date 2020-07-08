import React, { Component } from 'react'


const questions = [
    {
    number:1,
    text:"Eye Color?"
    },
    {
        number:2,
    text:"Hair Color?"
    },
    {
    number:3,
    text:"Hs Facial Hair?"
    },
    {
    number:4,
    text:"Wears Glasses?"
    },
    {
    number:5,
    text:"What's Their interesting tidbit?"
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
                             <a className="dropdown-item"  onCLick={this.handleAnswer}>{question.text}</a>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default DropDown