import React, { Component } from 'react';
import { MDBCol, MDBRow, MDBCard, MDBCardUp, MDBCardBody, MDBAvatar, MDBIcon, MDBCardImage } from "mdbreact";
import dude from "../../images/final-body.png";
import women from "../../images/women2.png";
import "./style.css";
import API from '../../lib/API';
import AuthContext from "../../contexts/AuthContext";
import Gravatar from "react-gravatar"


class PlainJaneSmall extends Component {
    static contextType = AuthContext;
    state = {
        isLoading: true,
        error: ""
    }

    componentDidMount() {
        API.Newcardinfos.getCards(this.context.authToken)
            .then(response => response.data)
            .then(newcardinfo => this.setState({ newcardinfo }))
            .catch(err => {
                if (err) {
                    return this.setState({ error: "Error in create card" });
                }
                console.log(err);
            }).finally(() => this.setState({ isLoading: false }));
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
                <MDBCard id="CardBCGPlainJaneSmall" style={{width:"27rem", height: "15.6rem"}}>
                    <MDBCardBody>
                        <MDBRow>
                            <MDBCol>
                            <Gravatar className="rounded-circle plainJaneImgSmall" email={user ? user.email : "loading ...."} size={100} />
                            </MDBCol>
                            <MDBCol>
                                <div>
                                    <h2 id="BisJaneSmall">Your Name</h2>
                                    <div id="pFontSmall">
                                        <p className="GenPadding text-left" id="NameJaneSmall">{this.state.newcardinfo[mostRecent].newname}</p>
                                        <p className="text-left GenPadding" id="EmailJaneSmall">{this.state.newcardinfo[mostRecent].email}</p>
                                        <p className="text-left GenPadding"id="WebsiteJaneSmall">{this.state.newcardinfo[mostRecent].website}</p>
                                        <p className="text-left GenPadding"id="phoneJaneSmall">{this.state.newcardinfo[mostRecent].phonenumber}</p>
                                    </div>
                                </div>
                            </MDBCol>
                        </MDBRow>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </React.Fragment>
    );
    }
};


export default PlainJaneSmall;
