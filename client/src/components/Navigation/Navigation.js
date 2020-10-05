import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import '../Navigation/nav.css'
import { Navbar, NavDropdown, Nav, Form, FormControl, Button} from 'react-bootstrap';
import AuthContext from '../../contexts/AuthContext';
// import AuthDropdown from '../../components/AuthDropdown/AuthDropdown';

class Navigation extends Component {
  static contextType = AuthContext;

  state = {
    collapsed: true
  }

  toggleCollapse = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    const { user } = this.context;
    const { collapsed } = this.state;
    // const targetClass = `collapse navbar-collapse ${!collapsed && 'show'}`;
    // const togglerClass = `navbar-toggler ${collapsed && 'collapsed'}`;

    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Saint George Apparel</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {/* MENS */}
            <NavDropdown title="Mens" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Shirts</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Shorts</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Pants</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Sweat Shirts</NavDropdown.Item>
            </NavDropdown>
             {/* WOMENS */}
            <NavDropdown title="Womens" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Shirts</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Shorts</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Pants</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Sports Bras</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Sweat Shirts</NavDropdown.Item>
            </NavDropdown>
            {/* ACCESSORIES */}
            <NavDropdown title="Accessories" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Bags</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Hats</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Stickers</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Water Bottles</NavDropdown.Item>
            </NavDropdown>
            {/* SUPPLEMENTS */}
            <NavDropdown title="Supplements" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Protein</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Pre-Workout</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Wellness</NavDropdown.Item>        
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>






      // <div className='Navigation'>
      //   <nav className='navbar navbar-expand-lg navbar-light bg-light mb-3'>
      //     <Link className='navbar-brand' to='#'>Project 3</Link>
      //     <button className={togglerClass} onClick={this.toggleCollapse} data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
      //       <span className='navbar-toggler-icon'></span>
      //     </button>

      //     <div className={targetClass} id='navbarSupportedContent'>
      //       <ul className='navbar-nav mr-auto'>
      //         <li className='nav-item'>
      //           <Link className='nav-link' to='/' onClick={this.toggleCollapse}>Home</Link>
      //         </li>
      //         <li className='nav-item dropdown'>
      //           <Link className='nav-link dropdown-toggle' to='/' onClick={this.toggleCollapse}
      //           id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
      //           >Mens</Link>

      //         <div className="dropdown-menu" aria-labelledby="navbarDropdown">
      //           <Link className='nav-item dropdown-item' to='/' onClick={this.toggleCollapse}>Shirts</Link>
      //           <Link className='dropdown-item' to='/' onClick={this.toggleCollapse}>Shirts</Link>
      //           <Link className='dropdown-item' to='/' onClick={this.toggleCollapse}>Shirts</Link>
      //         </div>
      //         </li>
      //       {user &&
      //         <li className='nav-item'>
      //           <Link className='nav-link' to='/secret' onClick={this.toggleCollapse}>Secret</Link>
      //         </li>}
      //       </ul>
      //     <ul className='navbar-nav'>
      //       {user
      //         ? <AuthDropdown onClick={this.toggleCollapse} />
      //         : <>
      //           <li className='nav-item'><Link className='nav-link' to='/login' onClick={this.toggleCollapse}>Login</Link></li>
      //           <li className='nav-item'><Link className='nav-link' to='/register' onClick={this.toggleCollapse}>Register</Link></li>
      //         </>}
      //     </ul>
      //     </div>
      //   </nav>
      // </div >
    );
  }
}

export default Navigation;
