import React, {Component} from 'react';
import JumbotronNav from '../../components/JumbotronNav';
import './home.css'


class HomePage extends Component {
 
  componentDidMount(props){
    this.props.backgroundImageChanger('maryPoppins')
  }
  componentWillUnmount(props){
   this.props.backgroundImageChanger('')
  }
    render() {
        return (            
            <div id='home'>
                <JumbotronNav/>
            </div>           
        );
    }
}

export default HomePage;
