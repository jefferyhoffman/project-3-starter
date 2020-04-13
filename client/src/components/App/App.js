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

    this.handleRefresh = () => {
      const { authToken } = this.state.auth;
      if (!authToken) return;

      API.Users.getMe(authToken)
        .then(response => response.data)
        .then(user => this.setState(prevState => ({ auth: { ...prevState.auth, user } })))
        .catch(err => console.log(err));
    }

    this.state = {
      auth: {
        user: undefined,
        authToken: TokenStore.getToken(),
        onLogin: this.handleLogin,
        onLogout: this.handleLogout, 
        onRefresh: this.handleRefresh
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
          images: 'https://danbooru.donmai.us/data/__laffey_javelin_bremerton_and_bremerton_azur_lane_drawn_by_hori_hori_no_su__eaf1e44a7e52faed1496947405c8b11e.jpg' 
        }, 
        {
          name: 'Sketches Vol 02', 
          images: 'https://danbooru.donmai.us/data/sample/__hakurei_reimu_touhou_drawn_by_sonson_eleven__sample-cfa0a296f3d280bd52d6359281aff894.jpg' 
        }, 
        {
          name: 'Sketches Vol 02', 
          images: 'https://danbooru.donmai.us/data/sample/__murasaki_shion_roboco_san_and_kiryuu_coco_hololive_drawn_by_yohane__sample-f4cda1f8d9eba84ab5820cd07a0c3efa.jpg' 
        }, 
        {
          name: 'Sketches Vol 02', 
          images: 'https://danbooru.donmai.us/data/sample/__hakurei_reimu_kirisame_marisa_and_remilia_scarlet_touhou_drawn_by_yuki_popopo__sample-f5cd511a4e2d3b2d2969817b6682b8b5.jpg' 
        },
        {
          name: 'Sketches Vol 02', 
          images: 'https://reader015.dokumen.tips/reader015/html5/0710/5b449913e6460/5b449915edb5f.jpg' 
        },
        {
          name: 'Sketches Vol 02', 
          images: 'https://coryproulx.files.wordpress.com/2014/09/coryproulx_wk4.jpg' 
        },
        {
          name: 'Sketches Vol 02', 
          images: 'https://static.wixstatic.com/media/c8e62d_fde4ce1f746849528cf4088340d27f97~mv2_d_3207_4091_s_4_2.jpg/v1/fill/w_697,h_889,al_c,q_90,usm_0.66_1.00_0.01/c8e62d_fde4ce1f746849528cf4088340d27f97~mv2_d_3207_4091_s_4_2.webp' 
        },
        {
          name: 'Sketches Vol 02', 
          images: 'https://www.anatomytools.com/images/atc/artists/Michael_Hampton/Michael_Hampton_004.jpg' 
        },
        {
          name: 'Sketches Vol 02', 
          images: 'https://www.anatomytools.com/images/atc/artists/Michael_Hampton/Michael_Hampton_018.jpg' 
        },
        {
          name: 'Sketches Vol 02', 
          images: 'https://blog.bodiesinmotion.photo/wp-content/uploads/2016/11/sketch-5-1800x1443.jpg' 
        }
      ]
    }
  }

  componentDidMount() {
    this.handleRefresh();
  }

  render() {
    return (
      <AuthContext.Provider value={this.state.auth}>
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
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </AuthContext.Provider>
    );
  }
}

export default App;
