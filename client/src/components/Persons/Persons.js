import React, { Component } from 'react'

const people =[
    {
        name:"bob",
        img: "https://i.pinimg.com/564x/4f/24/7a/4f247acf992487b5f1d8bdd641f6bd50.jpg"
    },
    {
        name:"tina",
        img:"https://i.pinimg.com/564x/7e/4a/d6/7e4ad6637c49a7734c3cd9a0f859da1f.jpg"
    },
    {
        name:"bill",
        img:"https://i.pinimg.com/564x/37/85/a2/3785a25aed66087ea2b9bda233344242.jpg"
    },
    {
        name:"Jimmy",
        img:"https://vignette.wikia.nocookie.net/southpark/images/6/63/Jimmy_valmer_here.png/revision/latest/scale-to-width-down/310?cb=20170815180902"
    },
    {
        name:"Bart",
        img:"https://static.simpsonswiki.com/images/thumb/6/65/Bart_Simpson.png/300px-Bart_Simpson.png"
    }
]


class Persons extends Component{




    render(){
        return(
            <div>
            <div className="columns is-centered">
                <h1 className="is-size-1">Potential Characters</h1>
            </div>
            <div className= "columns is-centered">
                {people.map((person)=>
                <div className="column">
                <div className="card">
                <h1 className="is-size-2">--{person.name}--</h1>
                <img src={person.img} alt={person.name} style={{width:"200px",height:"200px"}} />
                </div>
                </div>
                )}
            </div>
            </div>
        )
    }

}
export default Persons