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
        alt:"A sketch of a woman inside of a fishbol",
        image:"https://paintingvalley.com/sketches/nice-sketches-13.jpg"
      },
      {
        
        alt:"A sketch of a wold",
        image:"https://paintingvalley.com/sketches/sketch-a-wolf-23.jpg"
      },
      {
        alt:"A sketch of Deku",
        image:"https://i.pinimg.com/originals/86/0d/da/860ddae3f7e378a2e8e9450e6518d877.jpg"
      },
      {
        alt:"A sketch of a sad woman",
        image:"https://bestsketches.com/wp-content/uploads/2020/04/Facial-cute-sketches-easy.jpg"
      },
      {
        alt:"A sketch of a mountain",
        image:"https://1.bp.blogspot.com/-KsHtmvIza_U/T6APoSGzB-I/AAAAAAAAA2Y/YfetAFJVrYc/w640/Sketch-of-Mt-Ama-Dablam.jpg"
      },
      {
        alt:"A sketch of a Rose",
        image:"https://i.pinimg.com/originals/29/53/7a/29537a687d5a399483294ed3bebe22aa.jpg"
      },
      {
        alt:"a sketch of woman wearing glasses",
        image:"https://clip.cookdiary.net/sites/default/files/wallpaper/drawn-portrait/345000/drawn-portrait-easy-sketch-345000-2227516.jpg"
      },
      {
        alt:"a sketch of a landscape",
        image:"https://i.ytimg.com/vi/1rHYcXmKd9o/maxresdefault.jpg"
      },
    ],

      galleries: [
        {
          name: 'Sketches Vol 01', 
          images: 'https://raw.githubusercontent.com/parmark/Booru-Poses/master/assets/images/sample3.jpg'
        }, 
        {
          name: 'Sketches Vol 02', 
          images: 'https://raw.githubusercontent.com/parmark/Booru-Poses/master/assets/images/sample3.jpg' 
        }, 
        {
          name: 'Sketches Vol 02', 
          images: 'https://raw.githubusercontent.com/parmark/Booru-Poses/master/assets/images/sample3.jpg' 
        }, 
        {
          name: 'Sketches Vol 02', 
          images: 'https://raw.githubusercontent.com/parmark/Booru-Poses/master/assets/images/sample3.jpg' 
        }, 
        {
          name: 'Sketches Vol 02', 
          images: 'https://raw.githubusercontent.com/parmark/Booru-Poses/master/assets/images/sample3.jpg' 
        },
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
