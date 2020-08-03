import React, { useState } from 'react';


const Add = ()=> {
  
    return (
      <div className='container Game'>
       <h1>Let's Add Characters</h1>
        <div className="columns is-centered is-multiline">
            <div className="column is-full">
                <label>Name</label>
                <input type="text" placeholder="Name here"></input>
                <div className="column is-full">
                <label>Fact</label>
                <input type="text" placeholder="write a quick fact here"></input>
                </div>
                <div className="column is-full">
                <label>Story</label>
                <input type="text" placeholder="intro story here"></input>
                </div>
                <div className="column is-full">
                <h1>Finish up by clicking an avatar to represent our new Character.</h1>
                </div>
            </div>
        </div>
       <div className="columns is-centered is-multiline">
        <div className="column is-one-quarter">
            <div className="box">
                <img src="./chickBlack.png" alt="person"/>
            </div>
        </div>
        <div className="column is-one-quarter">
            <div className="box">
                <img src="./chickBlonde.png" alt="person"/>
            </div>
        </div>
        <div className="column is-one-quarter">
            <div className="box">
                <img src="./chickBrown.png" alt="person"/>
            </div>
        </div>
        <div className="column is-one-quarter">
            <div className="box">
                <img src="./chickDarker.png" alt="person"/>
            </div>
        </div>
        <div className="column is-one-quarter">
            <div className="box">
                <img src="./dudeDarker.png" alt="person"/>
            </div>
        </div>
        <div className="column is-one-quarter">
            <div className="box">
                <img src="./dudeBrown.png" alt="person"/>
            </div>
        </div>
        <div className="column is-one-quarter">
            <div className="box">
                <img src="./dudeBlonde.png" alt="person"/>
            </div>
        </div>
        <div className="column is-one-quarter">
            <div className="box">
                <img src="./dudeBlack.png" alt="person"/>
            </div>
        </div>
            

       </div>

        </div>
    );
}

export default Add;