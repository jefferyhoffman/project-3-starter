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

        if(!user || this.state.isLoading){
          return(
            <h1>loading ...</h1>
          )
        }
        const qrCode = 
            "http://api.qrserver.com/v1/create-qr-code/?size=40x40&data=";
        const mostRecent = this.state.newcardinfo.length - 1;
        
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
                                        <h2 className="mininameColour minicolorMainPadding">{this.state.newcardinfo[mostRecent].newname}</h2>
                                        <div className="minifontColourp">
                                            <strong>
                                            <p className="minicolorCompName">{this.state.newcardinfo[mostRecent].company}</p>
                                            <p className="minicolorEmail">{this.state.newcardinfo[mostRecent].newemail}</p>
                                            <p className="minicolorWebsite">{this.state.newcardinfo[mostRecent].website}</p>
                                            <p className="minicolorPhone">{this.state.newcardinfo[mostRecent].phonenumber}</p>
                                            </strong>
                                        </div>
                                    </div>
                                <div className="QRCODEPadding">
                                <img src={qrCode + encodeURIComponent(this.state.newcardinfo[mostRecent].website)} />
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
