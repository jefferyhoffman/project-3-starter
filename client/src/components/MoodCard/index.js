import React, { Component } from "react";
import {
  MDBCol,
  MDBRow,
  MDBCard,
  MDBCardUp,
  MDBCardBody,
  MDBAvatar,
  MDBIcon,
  MDBCardImage
} from "mdbreact";
import "./style.css";
import AuthContext from "../../contexts/AuthContext";
import API from '../../lib/API';


class MoodCard extends Component {
  static contextType = AuthContext;

  state = {
    isLoading: true,
    error: ""
  };

  componentDidMount() {
    API.Newcardinfos.getCards(this.context.authToken)
      .then(response => console.log(response.data))
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
    console.log(user);
    return (
      <React.Fragment>
        <MDBCol>
          <MDBCard
            className="just"
            id="MoodCardBorder"
            style={{ width: "45rem", height: "22.815rem" }}
          >
            <MDBCol>
              <MDBCardBody>
                <MDBRow>
                  <MDBCard
                    id="CardBCGMood"
                    style={{ width: "40rem", height: "17.8125rem" }}
                  >
                    <MDBCardBody className="white-text" id="cardBodyMood">
                      <MDBRow>
                        <MDBCol>
                          <h1 style={{ fontSize: "72" }} id="nameMood">
                            {user ? user.name : "loading...."}
                          </h1>
                          <h1 style={{ fontSize: "72" }} id="companyMood">
                            HR Inovations Incorporated
                          </h1>
                          <p id="phoneMood">{user ? user.phonenumber : "loading ...."}</p>
                          <p id="emailMood">
                            {user ? user.email : "loading ...."}
                          </p>
                          <p id="websiteMood">Futurum-est-nostrum.com</p>
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
}

export default MoodCard;
