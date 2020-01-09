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

      if(!user || this.state.isLoading){
          return(
            <h1>loading ...</h1>
          )
        }

      const qrCode = 
          "http://api.qrserver.com/v1/create-qr-code/?size=50x50&data=";
      const mostRecent = this.state.newcardinfo.length - 1;

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
                                  <h2 className="nameColour colorMainPadding">{this.state.newcardinfo[mostRecent].newname}</h2>
                                  <div className="fontColourp">
                                  <strong>
                                  <p className="colorCompName">{this.state.newcardinfo[mostRecent].company}</p>
                                  <p className="colorEmail">{this.state.newcardinfo[mostRecent].newemail}</p>
                                  <p className="colorWebsite">{this.state.newcardinfo[mostRecent].website}</p>
                                  <p className="colorPhone">{this.state.newcardinfo[mostRecent].phonenumber}</p>
                                  </strong>
                                  </div>
                                  <div className="ColorPaddingforQRCODE">
                                    <p>
                                    <p className="text-left GenPadding"id="WebsiteJane"><img src={qrCode + encodeURIComponent(this.state.newcardinfo[mostRecent].website)} /></p>
                                    </p>
                                  </div>
                          </div>
                          </MDBCol>
                      </MDBRow>
              </MDBCard>
          </MDBCol>
          </React.Fragment>        
        )
    }
}

export default Colour;
