// import React from "react";
// import API from "../../Utils/JokeAPI";


// class Jokes extends React.Component {
//     state = {
//         result: []

//     };
//     componentDidMount() {
//         this.jokesResults("")
//     }
//     jokeResults = query => {
//         API.search(query)
//             .then(res => this.setState({ result: res.data }))
//             .catch(err => console.log(err))
//     }

//     render() {
//         return (
//             <div>
//                 {this.state.result.map(result => {
//                     return 
//                     <div>
//                     <p>{result.setup}</p>
//                     <p>{result.delivery}</p>
//                     </div>
//                 })}
//             </div>
//         );
//     }
// }

// export default Jokes;
