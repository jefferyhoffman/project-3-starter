// import React, { useContext, useEffect, useState } from "react";
// import AuthContext from "../../contexts/AuthContext";
// import Selected from "../../components/SelectedChallenges";
// import API from '../../lib/API'
// const User = (props) => {
//   const userInfo = useContext(AuthContext);
//   const [theSelected, setTheSelected] = useState([])
//   useEffect(()=>{
//    const selected = API.Actions.getSelected()
//    setTheSelected(selected)
//   },[])
//   console.log(userInfo);
//   return (
//     <>
//       <h1>Welcome to the world of tomorrow {userInfo.user.name}!!!</h1>
//       {theSelected && <Selected selections={theSelected}/>}
//     </>
//   );
// };
// export default User;
