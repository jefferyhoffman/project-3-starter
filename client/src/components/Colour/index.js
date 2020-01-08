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
                <MDBCard id="HH" className="ColourBody" style={{width:"45rem", height: "22.8125rem"}}>
                        <MDBRow>
                            <MDBCol>
                            <MDBCard style={{width: "300px"}}>
                                <MDBCardBody className="logoSideColour rounded topLogoPadding" style={{height: "22.8125rem"}}>
                                <img src={logo}></img>
                                </MDBCardBody>
                            </MDBCard>
                            </MDBCol>
                            <MDBCol>
                            <div className="text-white">
                                    <h2 className="nameColour colorMainPadding">John Parker Hodges</h2>
                                    <div className="fontColourp">
                                    <strong>
                                    <p className="colorCompName">JP Designs</p>
                                    <p className="colorEmail">johnparker@jphodges.io</p>
                                    <p className="colorWebsite">jphodges.io</p>
                                    <p className="colorPhone">561-531-2134</p>
                                    </strong>
                                    </div>
                            </div>
                            </MDBCol>
                        </MDBRow>
                </MDBCard>
            </MDBCol>
            </React.Fragment>        )
    }
}


export default Colour;
