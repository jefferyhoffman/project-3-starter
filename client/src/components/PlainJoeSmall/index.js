import React, { Component } from 'react';
import { MDBCol, MDBRow, MDBCard, MDBCardUp, MDBCardBody, MDBAvatar, MDBIcon, MDBCardImage } from "mdbreact";
import "./style.css"
import dude from '../../images/PlainJoeLogo.png'
import API from '../../lib/API';
import AuthContext from "../../contexts/AuthContext";


class PlainJoeSmall extends Component {
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
                <MDBCard id="CardBCGPlainJoeSmall" style={{ width: "27rem", height: "16rem" }}>
                    <MDBCardBody className='white-text' id="cardBodyPlainJoeSmall">
                        <MDBRow>
                            <MDBCol>
                                <div className="line2"></div>
                                <img src={dude} className="img-fluid" id='PlainJoeSmallLogo' />
                            </MDBCol>
                            <MDBCol>
                                <h1 id='nameAndCompanyPlainJoeSmall'>{this.state.newcardinfo[mostRecent].newname}</h1>
                                <p id='textPlainJoeSmall'>{this.state.newcardinfo[mostRecent].email}</p>
                                <p id='textPlainJoeSmall'>{this.state.newcardinfo[mostRecent].phonenumber}</p>
                                <p id='textPlainJoeSmall'>{this.state.newcardinfo[mostRecent].website}</p>
                                <h1 style={{fontSize: '72'}} id='nameAndCompanyPlainJoeSmall'> {this.state.newcardinfo[mostRecent].company}</h1>
                            </MDBCol>
                        </MDBRow>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </React.Fragment>
        )
    }
}


export default PlainJoeSmall;
