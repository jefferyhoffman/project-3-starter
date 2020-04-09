import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import API from '../../lib/API';
import TokenStore from '../../lib/TokenStore';
import AuthContext from '../../contexts/AuthContext';
import Navigation from '../../components/Navigation/Navigation';
import PrivateRoute from '../../components/PrivateRoute/PrivateRoute';
import Home from '../../pages/Home/Home';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';
import Galleries from '../../pages/Galleries'
import Secret from '../../pages/Secret/Secret';
import NotFound from '../../pages/NotFound/NotFound';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleLogin = (user, authToken) => {
      TokenStore.setToken(authToken);
      this.setState(prevState => ({ auth: { ...prevState.auth, user, authToken } }));
    };

    this.handleLogout = () => {
      TokenStore.clearToken();
      this.setState(prevState => ({ auth: { ...prevState.auth, user: undefined, authToken: undefined } }));
    }

    this.state = {
      auth: {
        user: undefined,
        authToken: TokenStore.getToken(),
        onLogin: this.handleLogin,
        onLogout: this.handleLogout
      }, 

      homeGallery:[
        {
        key:1,
        artist: "joe",
        title:"hand",
        caption: "my name is joe i like to draw",
        image:"https://cdn.pixabay.com/photo/2016/07/14/00/27/hand-1515895_960_720.png"
      },
      {
        key:2,
        artist: "Mark",
        title:"old man",
        caption: "my name is Mark i like to draw",
        image:"https://cdn.pixabay.com/photo/2017/01/22/00/18/the-old-man-1998604_1280.jpg"
      },
      {
        key:3,
        artist: "Tim",
        title:"Deku",
        caption: "My name is Tim i like to draw",
        image:"https://i.pinimg.com/originals/86/0d/da/860ddae3f7e378a2e8e9450e6518d877.jpg"
      }
    ],

      galleries: [
        {
          key: 1,
          name: 'Sketches Vol 01', 
          images: ['https://raw.githubusercontent.com/parmark/Booru-Poses/master/assets/images/sample3.jpg', 
          'https://raw.githubusercontent.com/parmark/Booru-Poses/master/assets/images/sample2.jpg', 
          'https://raw.githubusercontent.com/parmark/Booru-Poses/master/assets/images/sample1.jpg'] 
        }, 
        {
          key: 2,
          name: 'Sketches Vol 02', 
          images: ['https://raw.githubusercontent.com/parmark/Booru-Poses/master/assets/images/sample3.jpg', 
          'https://raw.githubusercontent.com/parmark/Booru-Poses/master/assets/images/sample2.jpg', 
          'https://raw.githubusercontent.com/parmark/Booru-Poses/master/assets/images/sample1.jpg'] 
        }, 
        {
          key: 3,
          name: 'Sketches Vol 03', 
          images: ['https://raw.githubusercontent.com/parmark/Booru-Poses/master/assets/images/sample3.jpg', 
          'https://raw.githubusercontent.com/parmark/Booru-Poses/master/assets/images/sample2.jpg', 
          'https://raw.githubusercontent.com/parmark/Booru-Poses/master/assets/images/sample1.jpg'] 
        }, 
        {
          key: 4,
          name: 'Sketches Vol 04', 
          images: ['https://raw.githubusercontent.com/parmark/Booru-Poses/master/assets/images/sample3.jpg', 
          'https://raw.githubusercontent.com/parmark/Booru-Poses/master/assets/images/sample2.jpg', 
          'https://raw.githubusercontent.com/parmark/Booru-Poses/master/assets/images/sample1.jpg'] 
        }, 
        {
          key: 5,
          name: 'Sketches Vol 05', 
          images: ['https://raw.githubusercontent.com/parmark/Booru-Poses/master/assets/images/sample3.jpg', 
          'https://raw.githubusercontent.com/parmark/Booru-Poses/master/assets/images/sample2.jpg', 
          'https://raw.githubusercontent.com/parmark/Booru-Poses/master/assets/images/sample1.jpg'] 
        }
      ]
    }
  }

  componentDidMount() {
    const { authToken } = this.state.auth;
    if (!authToken) return;

    API.Users.getMe(authToken)
      .then(response => response.data)
      .then(user => this.setState(prevState => ({ auth: { ...prevState.auth, user } })))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <AuthContext.Provider value={this.state.auth} images={this.state.galleries}>
        <div className='App'>
          <Navigation />
          <div>
            <Switch>
              <Route exact path='/' render={()=> <Home homeGallery={this.state.homeGallery}/>}
               />
              <Route path='/login' component={Login} />
              <Route path='/register' component={Register} />
              <Route 
                path='/galleries' 
                render={() => <Galleries galleries={this.state.galleries} />}  
              />
              <PrivateRoute path='/secret' component={Secret}/>
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </AuthContext.Provider>
    );
  }
}

export default App;
