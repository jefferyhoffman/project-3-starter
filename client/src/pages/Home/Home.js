import React, {Component} from 'react';
// import BackgroundImage from "../components/BackgroundImage"
import "./style.css";



class HomePage extends Component {
 
  componentDidMount(props){
    this.props.backgroundImageChanger('maryPoppins')
  }
  componentWillUnmount(props){
   this.props.backgroundImageChanger('')
  }
    render() {
        return (
            // <BackgroundImage>
                <div>
                    <div className="jumbotron">
                        <div className="container">
                            <h1 className="display-4">Fluid jumbotron</h1>
                            <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                        </div>
                    </div>
                </div>
            // </BackgroundImage>
        );
    }
}

export default HomePage;
