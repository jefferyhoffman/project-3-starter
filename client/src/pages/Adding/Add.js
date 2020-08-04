import React, { useState, useContext } from 'react';
import {customContext} from '../../contexts/customContext'


const Add = ()=> {
    const{custom, setCustom}=useContext(customContext)
    const[name, setName]= useState('');
  const[fact, setFact]=useState('');
  const [story, setStory]=useState('');
  const newCustom = []


const handleChickBlack = () => {
    newCustom.push({
        picture:'./chickBlack.png',
        name:`${name}`,
        fact:`${fact}`,
        story:`${story}`,
        eyeColor:'Brown',
        hairColor:'Black',
        glasses:false,
        facialHair:false,


    })
    setLocalStorage();
    alert(`${name} has been added`)
    
}
const handleChickBlonde = () => {
    newCustom.push({
        picture:'./chickBlonde.png',
        name:`${name}`,
        fact:`${fact}`,
        story:`${story}`,
        eyeColor:'blue',
        hairColor:'blonde',
        glasses:false,
        facialHair:false,


    })
    setLocalStorage();
    alert(`${name} has been added`)
}
const handleChickBrown = () => {
    newCustom.push({
        picture:'./chickBrown.png',
        name:`${name}`,
        fact:`${fact}`,
        story:`${story}`,
        eyeColor:'Brown',
        hairColor:'Brown',
        glasses:false,
        facialHair:false,


    })
    setLocalStorage();
    alert(`${name} has been added`)
}
const handleChickDarker = () => {
    newCustom.push({
        picture:'./chickDarker.png',
        name:`${name}`,
        fact:`${fact}`,
        story:`${story}`,
        eyeColor:'Brown',
        hairColor:'Brown',
        glasses:false,
        facialHair:false,


    })
    setLocalStorage();
    alert(`${name} has been added`)
}
const handleDudeBlack = () => {
    newCustom.push({
        picture:'./dudeBlack.png',
        name:`${name}`,
        fact:`${fact}`,
        story:`${story}`,
        eyeColor:'Brown',
        hairColor:'Black',
        glasses:false,
        facialHair:false,


    })
    setLocalStorage();
    alert(`${name} has been added`)
}
const handleDudeBlonde = () => {
    newCustom.push({
        picture:'./dudeBlonde.png',
        name:`${name}`,
        fact:`${fact}`,
        story:`${story}`,
        eyeColor:'Blue',
        hairColor:'Blonde',
        glasses:false,
        facialHair:false,


    })
    setLocalStorage();
    alert(`${name} has been added`)
}
const handleDudeBrown = () => {
    newCustom.push({
        picture:'./dudeBrown.png',
        name:`${name}`,
        fact:`${fact}`,
        story:`${story}`,
        eyeColor:'Brown',
        hairColor:'Brown',
        glasses:false,
        facialHair:false,


    })
    setLocalStorage();
    alert(`${name} has been added`)
}
const handleDudeDarker = () => {
    newCustom.push({
        picture:'./dudeDarker.png',
        name:`${name}`,
        fact:`${fact}`,
        story:`${story}`,
        eyeColor:'Brown',
        hairColor:'Brown',
        glasses:false,
        facialHair:false,


    })
    console.log(newCustom)
    setLocalStorage();
    alert(`${name} has been added`)
}

const setLocalStorage = () => {
    localStorage.setItem('customChars', JSON.stringify(newCustom))
}



      return (
      <div className='container Game'>
       <h1>Let's Add Characters</h1>
        <div className="columns is-centered is-multiline">
            <div className="column is-full">
                <label>Name</label>
                <input type="text" placeholder="Name here" value={name} onChange={e => setName(e.target.value)}></input>
                <div className="column is-full">
                <label>Fact</label>
                <input type="text" placeholder="write a quick fact here" value={fact} onChange={e => setFact(e.target.value)}></input>
                </div>
                <div className="column is-full">
                <label>Story</label>
                <input type="text" placeholder="intro story here" value={story} onChange={e => setStory(e.target.value)}></input>
                </div>
                <div className="column is-full">
                <h1>Finish up by clicking an avatar to represent our new Character.</h1>
                </div>
            </div>
        </div>
       <div className="columns is-centered is-multiline">
        <div className="column is-one-quarter">
            <div className="box">
                <img src="./chickBlack.png" alt="person" onClick={handleChickBlack}/>
            </div>
        </div>
        <div className="column is-one-quarter">
            <div className="box">
                <img src="./chickBlonde.png" alt="person" onClick={handleChickBlonde}/>
            </div>
        </div>
        <div className="column is-one-quarter">
            <div className="box">
                <img src="./chickBrown.png" alt="person" onClick={handleChickBrown}/>
            </div>
        </div>
        <div className="column is-one-quarter">
            <div className="box">
                <img src="./chickDarker.png" alt="person" onClick={handleChickDarker}/>
            </div>
        </div>
        <div className="column is-one-quarter">
            <div className="box">
                <img src="./dudeDarker.png" alt="person" onClick={handleDudeDarker}/>
            </div>
        </div>
        <div className="column is-one-quarter">
            <div className="box">
                <img src="./dudeBrown.png" alt="person" onClick={handleDudeBrown}/>
            </div>
        </div>
        <div className="column is-one-quarter">
            <div className="box">
                <img src="./dudeBlonde.png" alt="person" onClick={handleDudeBlonde}/>
            </div>
        </div>
        <div className="column is-one-quarter">
            <div className="box">
                <img src="./dudeBlack.png" alt="person" onClick={handleDudeBlack}/>
            </div>
        </div>
            

       </div>

        </div>
    );
}

export default Add;