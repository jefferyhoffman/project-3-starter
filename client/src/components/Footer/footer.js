import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPagePro = () => {
  return (
    <MDBFooter color="stylish-color-dark" className="page-footer font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="4">
            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
            Slay Your Dragon
            </h5>
            <p>
              Free yourself, stand for what  
              you believe in and never settle. 
            </p>
            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
            <a href="#!">Contact Us</a>
            </h5>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="2">
            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
              Mens
            </h5>
            <ul className="list-unstyled">
              <li>
                <a href="/products/mens/shirts">Shirts</a>
              </li>
              <li>
                <a href="/products/mens/pants">Pants</a>
              </li>
              <li>
                <a href="/products/mens/sweatshirts">Sweat Shirts</a>
              </li>
            </ul>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="2">
            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
              Womens
            </h5>
            <ul className="list-unstyled">
              <li>
              <a href="/products/womens/shirts" >Shirts</a>
              </li>
              <li>
              <a href="/products/womens/shorts" >Shorts</a>
              </li>
              <li>
              <a href="/products/womens/pants" >Pants</a>
              </li>
              <li>
              {/* <a href="" >Sports Bras</a> */}
              </li>
              <li>
              <a href="/products/womens/sweatshirts" >Sweat Shirts</a>
              </li>
            </ul>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="2">
            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
              Accessories
            </h5>
            <ul className="list-unstyled">
              <li>
               <a href="/products/category/bags">Bags</a>
              </li>
              <li>
                <a href="/products/category/hats">Hats</a>
              </li>
              <li>
                <a href="#">Water Bottles</a>
              </li>
            </ul>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="2">
            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
             Wellness
            </h5>
            <ul className="list-unstyled">
              <li>
                <a href="/products/category/wellness">Wellness</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <hr />
      <div className="text-center py-3">
        <ul className="list-unstyled list-inline mb-0">
          <li className="list-inline-item">
            <h5 className="mb-1">Join Saint George</h5>
          </li>
          <li className="list-inline-item">
            <a href="/register" className="btn btn-danger btn-rounded">
              Become An Ambassador 
            </a>
          </li>
        </ul>
      </div>
      <hr />
      <div className="text-center">
        <ul className="list-unstyled list-inline">
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-fb mx-1">
              <i className="fab fa-facebook-f"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-tw mx-1">
              <i className="fab fa-twitter"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-gplus mx-1">
              <i className="fab fa-google-plus"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-li mx-1">
              <i className="fab fa-linkedin-in"> </i>
            </a>
          </li>
         
        </ul>
      </div>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
        &copy; {new Date().getFullYear()} Copyright: <a href="https://saint-george.herokuapp.com/"> SaintGeorgeAthleisure.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPagePro;

