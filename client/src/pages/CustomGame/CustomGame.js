import React, { useState, useContext } from 'react';
import {customContext} from '../../contexts/customContext'
import CustomPersons from '../../components/Persons/customPersons'

const CustomGame = ()=> {
    const{custom, setCustom}=useContext(customContext)



    return (
      <div className='container Game'>
       <div className="columns is-centered is-multiline">
        <CustomPersons/>   
       </div>
        </div>
    );
}

export default CustomGame;