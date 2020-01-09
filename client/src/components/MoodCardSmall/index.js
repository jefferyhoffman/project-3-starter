import React, { Component } from "react";
import { MDBCol, MDBRow, MDBCard, MDBCardUp, MDBCardBody, MDBAvatar, MDBIcon, MDBCardImage } from "mdbreact";
import "./style.css";
import AuthContext from "../../contexts/AuthContext";
import API from '../../lib/API';

class MoodCardSmall extends Component {
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
          <MDBCard className="just" id="MoodCardBorderSmall" style={{ width: "27rem", height: "16rem" }} >
            <MDBCol>
              <MDBCardBody>
                <MDBRow id="paddingMoodSmall">
                  <MDBCard id="CardBCGMoodSmall" style={{ width: "43rem", height: "13.5rem" }}>
                    <MDBCardBody className="white-text" id="cardBodyMoodSmall">
                      <MDBRow>
                        <MDBCol>
                          <h1 id="nameAndCompanyMoodSmall">{this.state.newcardinfo[mostRecent].newname}</h1>
                          <h1 id="nameAndCompanyMoodSmall">{this.state.newcardinfo[mostRecent].company}</h1>
                          <p id="textMoodSmall">{this.state.newcardinfo[mostRecent].phonenumber}</p>
                          <p id="textMoodSmall">{this.state.newcardinfo[mostRecent].newemail}</p>
                          <div className="qrCodeMOOD">
                              <p><img src={qrCode + encodeURIComponent(this.state.newcardinfo[mostRecent].website)} /></p>
                          </div>
                        </MDBCol>
                      </MDBRow>
                    </MDBCardBody>
                  </MDBCard>
                </MDBRow>
              </MDBCardBody>
            </MDBCol>
          </MDBCard>
        </MDBCol>
      </React.Fragment>
    );
  }
};

export default MoodCardSmall;
