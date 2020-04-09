import React, {Component} from 'react';
import JumbotronNav from '../../components/JumbotronNav';



class HomePage extends Component {
 
  componentDidMount(props){
    this.props.backgroundImageChanger('maryPoppins')
  }
  componentWillUnmount(props){
   this.props.backgroundImageChanger('')
  }
    render() {
        return (            
            <div>
                <JumbotronNav/>
            </div>           
        );
    }
}

export default HomePage;
