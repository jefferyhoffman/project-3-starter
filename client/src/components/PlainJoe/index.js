import React, { Component } from 'react';
import { MDBCol, MDBRow, MDBCard, MDBCardUp, MDBCardBody, MDBAvatar, MDBIcon, MDBCardImage } from "mdbreact";
import dude from '../../images/PlainJoeLogo.png'
import "./style.css";
import API from "../../lib/API";
import AuthContext from "../../contexts/AuthContext";

class PlainJoe extends Component {
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
        "http://api.qrserver.com/v1/create-qr-code/?size=50x50&data=";
    const mostRecent = this.state.newcardinfo.length - 1;

        return (
        <React.Fragment>
            <MDBCol>
                <MDBCard id="CardBCGPlainJoe" style={{width:"45rem", height: "22.8125rem"}}>
                    <MDBCardBody className='white-text' id="cardBodyPlainJoe">
                        <MDBRow>
                            <MDBCol>
                            <div className="line2"></div>
                            <img src={dude} className="img-fluid"/>
                            </MDBCol>
                            <MDBCol>
                                <h1 style={{fontSize: '72'}} id='namePlainJoe'>{this.state.newcardinfo[mostRecent].newname}</h1>
                                <p id='emailPlainJoe'>{this.state.newcardinfo[mostRecent].newemail}</p>
                                <p id='phonePlainJoe'>{this.state.newcardinfo[mostRecent].phonenumber}</p>
                                <p id='websitePlainJoe'>{this.state.newcardinfo[mostRecent].website}</p>
                                <h1 style={{fontSize: '72', paddingTop: '1rem'}} id='companyPlainJoe'>{this.state.newcardinfo[mostRecent].company}</h1>
                            </MDBCol>
                        </MDBRow>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </React.Fragment>
        )  
    }
}


export default PlainJoe;
