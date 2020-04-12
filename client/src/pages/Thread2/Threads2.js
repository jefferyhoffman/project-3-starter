// import React, { useState, use, useEffect } from "react";
// import API from "../../lib/API";
// import { Link } from "react-router-dom";
// import Jumbotron from "../../components/Jumbotron";
// import { Input, TextArea, FormBtn } from "../../components/ThreadForm";

// function Threads() {
//   const [threads, setThreads] = useState({});
//   const [formObject, setFormObject] = useState({});
//   const [users, setUsers] = useState({});

//   useEffect(() => {
//     loadThreads();
//   }, []);

//   function loadThreads() {
//     API.Threads.getThreads()
//       .then((res) => setThreads(res.data))
//       .catch((err) => console.log(err));
//   };

//   function handleInputChange(event) { 
//       const { name, value } = event.target;
//       setFormObject({...formObject, [name]: value})
//   };

//   function handleFormSubmit(event) { 
//       event.preventDefault();

//       // API.Users.getMe(users)

//       if (formObject.title && formObject.body) { 
          
//           API.Threads.createThread({
//               title: formObject.title,
//               body: formObject.body,
//           })
//           .then(res => loadThreads())
//           .catch(err => console.log(err));
//       }
//   }


//   return (
//     <div>
//       <Jumbotron> 
//         <Link to={"/thread/" + threads.id + "/" }>{threads.title}</Link>
//         <p>{threads.body}</p>
//       </Jumbotron>
//       <Jumbotron>
//           <h1>{console.log(users)}Create a new thread:</h1>
          
//       </Jumbotron>
//       <form>
//           <Input
//             onChange={handleInputChange}
//             name="title"
//             placeholder="Thread title (required)"
//           />
//           <TextArea
//             onChange={handleInputChange}
//             name="body"
//             placeholder="Write about music here..."
//           />
//           <FormBtn
//             disabled={!(formObject.title && formObject.body)}
//             onClick={handleFormSubmit}
//           >
//             Create new thread
//           </FormBtn>
//       </form>
//     </div>
//   );
// }

// export default Threads;


// THE VERSION BELOW WORKS DON'T DELETE IT NO MATTER WHAT. 

// import React, { Component, useState, use, useEffect } from "react";
// import API from "../../lib/API";
// import AuthContext from '../../contexts/AuthContext';
// import { Link } from "react-router-dom";
// import Jumbotron from "../../components/Jumbotron";
// import { Input, TextArea, FormBtn } from "../../components/ThreadForm";
// import TokenStore from "../../lib/TokenStore";

// class Threads extends Component {
//   constructor(props) {
//     super(props);

//     this.handleLogin = (user, authToken) => {
//       TokenStore.setToken(authToken);
//       this.setState(prevState => ({ auth: { ...prevState.auth, user, authToken } }));
     
//     };

//     this.handleLogout = () => {
//       TokenStore.clearToken();
//       this.setState(prevState => ({ auth: { ...prevState.auth, user: undefined, authToken: undefined } }));
//     }

//     this.state = {
//       auth: {
//         user: undefined,
//         authToken: TokenStore.getToken(),
//         onLogin: this.handleLogin,
//         onLogout: this.handleLogout
//       }
//     }
//   }

//   componentDidMount() {
//     const { authToken } = this.state.auth;
//     if (!authToken) return;

//     API.Users.getMe(authToken)
//       .then(response => response.data)
//       .then(user => this.setState(prevState => ({ auth: { ...prevState.auth, user } })))
//       .catch(err => console.log(err));

//       API.Users.getMe(authToken)
//       .then(response => { 
//         API.Threads.createThread({
//           title: "Testingplease",
//           body: "workworkkwrokwrok",
//           UserId: response.data.id
//         })
//         // console.log(response.data.id)
//       }
//       )
//   }

//   render() {
//     return (
//       <AuthContext.Provider value={this.state.auth}>
//         <Jumbotron> 
       
       
//       </Jumbotron>
//       <Jumbotron>
          
          
//       </Jumbotron>
//       </AuthContext.Provider>
//     );
//   }
// }

// export default Threads;
