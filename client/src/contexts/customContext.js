import React, {createContext, useState } from 'react'

export const customContext = createContext();

const CustomContextProvider = (props) => {
  
const [custom, setCustom]= useState([])

return(
<customContext.Provider value={{custom, setCustom}}>
    {props.children}
</customContext.Provider>

)
}

export default CustomContextProvider
