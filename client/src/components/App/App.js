import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import API from '../../lib/API';
import TokenStore from '../../lib/TokenStore';
import AuthContext from '../../contexts/AuthContext';
import Navigation from '../../components/Navigation/Navigation';
import PrivateRoute from '../../components/PrivateRoute/PrivateRoute';
import Home from '../../pages/Home/Home';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';
import Secret from '../../pages/Secret/Secret';
import NotFound from '../../pages/NotFound/NotFound';
import UserPage from '../../pages/User'
import './App.css';
import theBackground from './images/trees.jpg'
class App extends Component {
    constructor(props) {
        super(props);

        this.handleLogin = (user, authToken) => {
            TokenStore.setToken(authToken);
            this.setState(prevState => ({
                auth: {
                    ...prevState.auth,
                    user,
                    authToken
                }
            }));
        };

        this.handleLogout = () => {
            TokenStore.clearToken();
            this.setState(prevState => ({
                auth: {
                    ...prevState.auth,
                    user: undefined,
                    authToken: undefined
                }
            }));
        }
        this.changeIt =(url) =>{
          let selected
          if(url === 'maryPoppins') selected = theBackground
          else selected = ""
          console.log(selected)
          this.setState({backgroundImage:selected})
        }
        this.state = {
            auth: {
                user: undefined,
                authToken: TokenStore.getToken(),
                onLogin: this.handleLogin,
                onLogout: this.handleLogout
            },
            backgroundImage: "",
            backgroundImageChanger: this.changeIt
               
            }
          
        }
    
   
    componentDidMount() {
        const {authToken} = this.state.auth;
        if (!authToken) 
            return;
        

        API.Users.getMe(authToken).then(response => response.data).then(user => this.setState(prevState => ({
            auth: {
                ...prevState.auth,
                user
            }
        }))).catch(err => console.log(err));
    }
    someFunc =()=>{

    }
    render() {
        const bStyle = {
            'backgroundImage': `url(${
                this.state.backgroundImage
            })`,
             
            'backgroundPosition': "center",
            'backgroundRepeat': "no-repeat",
            'backgroundSize': "cover",
            'backgroundAttachment': 'fixed'
        }
        return (
            <AuthContext.Provider value={
                this.state.auth
            }>
                <div id='test'
                    style={bStyle}>

                    <Navigation/> {/* <img src={theBackground} alt=""/> */}
                    <div className='container'>
                        <Switch>
                            <Route exact path='/'
                                render={
                                    props => <Home {...props} {...this.state}/>}/>
                                />
                            <Route path='/login'
                                component={Login}/>
                            <Route path='/register'
                                component={Register}/>
                            <PrivateRoute path='/secret'
                                component={Secret}/>
                            <PrivateRoute path='/userpage'
                                component={UserPage}/>
                            <Route component={NotFound}/>
                        </Switch>
                    </div>
                </div>
            </AuthContext.Provider>
        );
    }
}

export default App;
