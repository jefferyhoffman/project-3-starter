import React, { Component } from 'react';
import { MDBCol, MDBRow, MDBCard, MDBCardBody} from "mdbreact";
import "./style.css"
import logo from '../../images/logo.png'
import AuthContext from "../../contexts/AuthContext";
import API from '../../lib/API';



class Colour extends Component {
    static contextType = AuthContext;
    
    state = {
        isLoading: true,
        error: ""
    };

    componentDidMount() {
        API.Newcardinfos.getCards(this.context.authToken)
          .then(response => response.data)
          .then(newcardinfo => this.setState({newcardinfo}))
          .catch(err => {
            if (err) {
              return this.setState({ error: "Error in create card" });
            }
            console.log(err);
          })
          .finally(() => this.setState({ isLoading: false }));
      }


    render() {
        const { user } = this.context;
        return (
            <React.Fragment>
            <MDBCol>
                <MDBCard id="HH" style={{width:"45rem", height: "22.8125rem"}}>
                    <MDBCardBody className="ColourBody">
                        <MDBRow>
                            <MDBCol>
                            <MDBCard>
                            <MDBCardBody className="logoSideColour">
                            <img src={logo}></img>
                            </MDBCardBody>
                        </MDBCard>
                            </MDBCol>
                            <MDBCol></MDBCol>
                        </MDBRow>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
            </React.Fragment>
        )
    }
}


export default Colour;
