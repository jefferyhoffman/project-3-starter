import React, { Component } from 'react';
import { MDBCol, MDBRow, MDBCard, MDBCardUp, MDBCardBody, MDBAvatar, MDBIcon, MDBCardImage } from "mdbreact";
import dude from "../../images/final-body.png";
import women from "../../images/women2.png";
import "./style.css";
import API from '../../lib/API';
import AuthContext from "../../contexts/AuthContext";


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
                    <MDBCard id="CardBCGPlainJaneSmall" style={{width:"27rem", height: "16rem"}}>
                        <MDBCardBody>
                            <MDBRow>
                                <MDBCol>
                                    <img src={women} className="img-fluid rounded-circle"/>
                                </MDBCol>
                                <MDBCol>
                                    <div>
                                    <h2 id="BisJaneSmall">{this.state.newcardinfo[mostRecent].newname}</h2>
                                    <div id="pFontSmall">
                                    <p className=" text-left" id="NameJaneSmall">{this.state.newcardinfo[mostRecent].company}</p>
                                    <p className="text-left" id="EmailJaneSmall">{this.state.newcardinfo[mostRecent].newemail}</p>
                                    <p className="text-left"id="WebsiteJaneSmall"><img src={qrCode + encodeURIComponent(this.state.newcardinfo[mostRecent].website)} /></p>
                                    <p className="text-left"id="phoneJaneSmall">{this.state.newcardinfo[mostRecent].phonenumber}</p>
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
