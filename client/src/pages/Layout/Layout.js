import React from "react";
import {Container} from 'react-bootstrap';
import '../Layout/Layout.css'
import Cards from '../../components/Cards/Cards'


function Layout() {
  return (
    <>
      <h2 className = "title">Shirts</h2>
      <Container fluid>
      <hr className="solid"></hr>
      </Container>
      <Cards/>
      <Container>
      <div className = 'v1'></div>

      </Container>

    </>
  );
}
export default Layout;
