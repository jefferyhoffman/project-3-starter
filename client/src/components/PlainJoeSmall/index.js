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
    let isInfo = "";

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
                                <h1 id='nameAndCompanyPlainJoeSmall'>{isInfo ? this.state.newcardinfo[this.state.newcardinfo.length - 1].newname : "Your Name"}</h1>
                                <p id='textPlainJoeSmall'>{isInfo ? this.state.newcardinfo[this.state.newcardinfo.length - 1].newemail : "Your Email"}</p>
                                <p id='textPlainJoeSmall'>{isInfo ? this.state.newcardinfo[this.state.newcardinfo.length - 1].phonenumber : "Your Phone Number"}</p>
                                <p id='textPlainJoeSmall'>{isInfo ? this.state.newcardinfo[this.state.newcardinfo.length - 1].website : "Your Website"}</p>
                                <h1 style={{fontSize: '72'}} id='nameAndCompanyPlainJoeSmall'>{isInfo ? this.state.newcardinfo[this.state.newcardinfo.length - 1].company : "Your Company"}</h1>
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
