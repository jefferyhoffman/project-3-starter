import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView, MDBRow, MDBCol } from 'mdbreact';
import BasicCard from '../BasicCard/Card'
import "./style.css"
import MiniColourCard from '../../components/miniColourCard';
import MoodCardSmall from '../../components/MoodCardSmall';
import PlainJaneSmall from '../../components/PlainJaneSmall';
import PlainJoeSmall from '../../components/PlainJoeSmall';

class FullPageIntroWithNonFixedTransparentNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    return (
      <div>
        <header>
              <MDBNavbar color="bg-primary" fixed="top" dark expand="md" scrolling transparent>
                <MDBContainer>
                  <MDBNavbarBrand href="/">
                    <strong>futurum est nostrum</strong>
                  </MDBNavbarBrand>
                  <MDBNavbarToggler onClick={this.onClick} />
                  <MDBCollapse isOpen={this.state.collapse} navbar>
                    <MDBNavbarNav right>
                      <MDBNavItem>
                        <MDBNavLink to="/LoginPage">Sign In</MDBNavLink>
                      </MDBNavItem>
                    </MDBNavbarNav>
                  </MDBCollapse>
                </MDBContainer>
              </MDBNavbar>
          <MDBView src="https://mdbootstrap.com/img/Photos/Others/img%20(42).jpg">

          <MDBMask overlay="indigo-slight" className="text-white text-center IndexPadding">
            <h1 className="BottomPaddingIndex"> Our Templates</h1>
            <MDBRow className="">
                <MDBCol></MDBCol>
                <MDBCol> <MiniColourCard/> </MDBCol>
                <MDBCol> <PlainJoeSmall/> </MDBCol>
                <MDBCol></MDBCol>
            </MDBRow>
            <br/>
            <MDBRow>
                <MDBCol></MDBCol>
                <MDBCol> <MoodCardSmall/> </MDBCol>
                <MDBCol> <PlainJaneSmall/> </MDBCol>
                <MDBCol></MDBCol>
            </MDBRow>
            </MDBMask>
          </MDBView>
        </header>

        <main>
          <MDBContainer className="text-center my-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo hic commodi est, laudantium magni, consectetur natus corrupti beatae vel quibusdam similique recusandae iusto odio sed repellat voluptas ad laboriosam enim?
          </MDBContainer>
        </main>
      </div>
    );
  }
}

export default FullPageIntroWithNonFixedTransparentNavbar;