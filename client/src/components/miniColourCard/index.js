import React, { Component } from 'react';
import { MDBCol, MDBRow, MDBCard, MDBCardBody} from "mdbreact";
import "./style.css"
import logo from '../../images/logo.png'
import AuthContext from "../../contexts/AuthContext";
import API from '../../lib/API';



class MiniColourCard extends Component {
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
        let isInfo = "";
        const qrCode = 
            "http://api.qrserver.com/v1/create-qr-code/?size=40x40&data=";
        
        return (
            <React.Fragment>
                <MDBCol>
                    <MDBCard className="miniColourBody" style={{width: "27rem", height: "16rem" }}>
                            <MDBRow>
                                <MDBCol>
                                <MDBCard style={{width: '13rem'}}>
                                    <MDBCardBody className="minilogoSideColour rounded minitopLogoPadding" style={{height: "16rem"}}>
                                    <img src={logo}></img>
                                    </MDBCardBody>
                                </MDBCard>
                                </MDBCol>
                                <MDBCol>
                                    <div className="text-white">
                                        <h2 className="mininameColour minicolorMainPadding">{isInfo ? this.state.newcardinfo[this.state.newcardinfo.length - 1].newname : "Your Name"}</h2>
                                        <div className="minifontColourp">
                                            <strong>
                                            <p className="minicolorCompName">{isInfo ? this.state.newcardinfo[this.state.newcardinfo.length - 1].company : "Your Company"}</p>
                                            <p className="minicolorEmail">{isInfo ? this.state.newcardinfo[this.state.newcardinfo.length - 1].newemail : "Your Email"}</p>
                                            <p className="minicolorWebsite">{isInfo ? this.state.newcardinfo[this.state.newcardinfo.length - 1].website : "Your Website"}</p>
                                            <p className="minicolorPhone">{isInfo ? this.state.newcardinfo[this.state.newcardinfo.length - 1].phonenumber : "Your Phone Number"}</p>
                                            </strong>
                                        </div>
                                    </div>
                                <div className="QRCODEPadding">
                                <img src={qrCode + encodeURIComponent(isInfo ? this.state.newcardinfo[this.state.newcardinfo.length - 1].website : "Hello World!")} />
                                </div>
                                </MDBCol>
                            </MDBRow>
                    </MDBCard>
                </MDBCol>
            </React.Fragment>        
        )
    }
}


export default MiniColourCard;

