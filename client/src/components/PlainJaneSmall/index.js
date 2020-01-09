import React, { Component } from 'react';
import { MDBCol, MDBRow, MDBCard, MDBCardUp, MDBCardBody, MDBAvatar, MDBIcon, MDBCardImage } from "mdbreact";
import women from "../../images/women2.png";
import "./style.css";
import API from '../../lib/API';
import AuthContext from "../../contexts/AuthContext";
import Gravatar from 'react-gravatar';



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
    let isInfo = "";
    
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
                                        <h2 id="BisJaneSmall">{isInfo ? this.state.newcardinfo[this.state.newcardinfo.length - 1].newname : "Your Name"}</h2>
                                        <div id="pFontSmall">
                                            <p className="GenPadding text-left" id="NameJaneSmall">{isInfo ? this.state.newcardinfo[this.state.newcardinfo.length - 1].company : "Your Company"}</p>
                                            <p className="text-left GenPadding" id="EmailJaneSmall">{isInfo ? this.state.newcardinfo[this.state.newcardinfo.length - 1].newemail : "Your Email"}</p>
                                            <p className="text-left GenPadding"id="WebsiteJaneSmall">{isInfo ? this.state.newcardinfo[this.state.newcardinfo.length - 1].website : "Your Website"}</p>
                                            <p className="text-left GenPadding"id="phoneJaneSmall">{isInfo ? this.state.newcardinfo[this.state.newcardinfo.length - 1].phonenumber : "Your Phone Number"}</p>
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
