import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';

// import API from '../../lib/API';
import AuthContext from '../../contexts/AuthContext';
// import LoginForm from '../../components/LoginForm/LoginForm';

// import React from 'react';
import Modal from 'react-bootstrap4-modal';
 

class Login extends Component {
  static contextType = AuthContext;
 
  render() {
    return (
      <Modal visible={true} onClickBackdrop={this.modalBackdropClicked}>
        <div className="modal-header">
          <h5 className="modal-title">Log-In</h5>
        </div>
        <div className="modal-body">
          <p> WILL WORK ON TONIGHT!
            
          </p>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" onClick={this.onPanic}>
            REGISTER
          </button>
          <button type="button" className="btn btn-primary" onClick={this.onFirePhasers}>
            SUBMIT
          </button>
        </div>
      </Modal>
    );
  }
}


// class Login extends Component {
//   static contextType = AuthContext;

//   state = {
//     redirectToReferrer: false,
//     error: ""
//   }

//   handleSubmit = (email, password) => {
//     API.Users.login(email, password)
//       .then(response => response.data)
//       .then(({ user, token }) => {
//         this.context.onLogin(user, token);
//         this.setState({ redirectToReferrer: true, error: "" });
//       })
//       .catch(err => {
//         let message;

//         switch (err.response.status) {
//           case 401:
//             message = 'Sorry, that email/password combination is not valid. Please try again.';
//             break;
//           case 500:
//             message = 'Server error. Please try again later.';
//             break;
//           default:
//             message = 'Unknown error.';
//         }

//         this.setState({ error: message });
//       });
//   }

//   render() {
//     const { from } = this.props.location.state || { from: { pathname: "/secret" } };
//     const { redirectToReferrer } = this.state;

//     if (redirectToReferrer) {
//       return <Redirect to={from} />;
//     }

//     return (
//       <div className='Login'>
//         <div className='row'>
//           <div className='col'>
//             <h1>Login</h1>
//           </div>
//         </div>
//         {this.state.error &&
//           <div className='row'>
//             <div className='col'>
//               <div className='alert alert-danger mb-3' role='alert'>
//                 {this.state.error}
//               </div>
//             </div>
//           </div>}
//         <div className='row'>
//           <div className='col'>
//             <LoginForm onSubmit={this.handleSubmit} />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

export default Login;
