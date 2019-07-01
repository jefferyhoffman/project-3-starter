import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Navigation/navigation.css';
import AuthContext from '../../contexts/AuthContext';
import AuthDropdown from '../../components/AuthDropdown/AuthDropdown';
import Logo from '../../pages/Images/Logo.png';



// const text = {
//   color: 'white',
// };

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
    const targetClass = `collapse navbar-collapse ${!collapsed && 'show'}`;
    const togglerClass = `navbar-toggler ${collapsed && 'collapsed'}`;


    return (
      <div className='Navigation'>
        <nav className='navbar navbar-expand-lg'>
          <Link to='/' className='logoLink'><img className='logo1' src={Logo} alt='My logo' /></Link>
          <Link to='/' className='logoLink'><h1 className='headermain'>DrinkStation</h1></Link>
          <button className={togglerClass} onClick={this.toggleCollapse} data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation' style={{ color: 'red', border: '1px solid black' }}>
            <span className='navbar-toggler-icon'><i className="fas fa-bars"></i></span>
          </button>
          <div className={targetClass} id='navbarSupportedContent'>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item bar'>
                <Link to='/featured' className='nav-link' onClick={this.toggleCollapse}>Infocus</Link>
              </li>
              <li className='nav-item bar'>
                <Link to='/view' className='nav-link' onClick={this.toggleCollapse}>Collection</Link>
              </li>
              {/* <li className='nav-item bar'>
                <Link to='/searchAPI' className='nav-link' onClick={this.toggleCollapse}>Search</Link>
              </li> */}
              <li className='nav-item bar'>
                <Link to='/about' className='nav-link' onClick={this.toggleCollapse}>About</Link>
              </li>
              <li className="nav-item dropdown bar">
                <Link className="nav-link dropdown-toggle" to='/navpage' id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={this.toggleCollapse}>
                  BarKnowMore
                    </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" to='/glass' onClick={this.toggleCollapse}><strong>Glass Gallery</strong></Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" to='/tools' onClick={this.toggleCollapse}><strong>Bar Tools</strong></Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" to='/liquor' onClick={this.toggleCollapse}><strong>Liquor Links</strong></Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" to='/ingredients' onClick={this.toggleCollapse}><strong>Ingredient Input</strong></Link>
                </div>
              </li>
              <li className="nav-item dropdown bar">
                <Link className="nav-link dropdown-toggle" to='/navpage' id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={this.toggleCollapse}>
                  Search Drinks
                    </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" to='/lookup' onClick={this.toggleCollapse}><strong>Lookup a Drink</strong></Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" to='/allsearch' onClick={this.toggleCollapse}><strong>Drink by type</strong></Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" to='/search' onClick={this.toggleCollapse}><strong>Search</strong></Link>
                </div>
              </li>
            </ul>
            {user
              ? <>
                <ul className='navbar-nav'>
                  <li className="nav-item dropdown bar">
                    <Link className="nav-link dropdown-toggle" to='/craft' id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={this.toggleCollapse}>
                      Craftstation
                    </Link>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <div className="dropdown-divider"></div>
                      <Link className="dropdown-item" to='/create' onClick={this.toggleCollapse}><strong>Create Drink</strong></Link>
                      <div className="dropdown-divider"></div>
                      <Link className="dropdown-item" to='mydrinks' onClick={this.toggleCollapse}><strong>Your Creations</strong></Link>
                    </div>
                  </li>
                  {/* <li className='nav-item bar'>
                    <Link to='/create' className='nav-link' onClick={this.toggleCollapse}>Create</Link>
                  </li>
                  <li className='nav-item bar'>
                    <Link to='/mydrinks' className='nav-link' onClick={this.toggleCollapse}>Creations</Link>
                  </li> */}
                </ul>
                <AuthDropdown onClick={this.toggleCollapse} />
              </>
              : <>
                <Link to='/login' className='nav-item nav-link' onClick={this.toggleCollapse}><strong>Sign in to Craft Drinks</strong></Link>
              </>}
          </div>
        </nav>
      </div>
    );
  }
}

export default Navigation;

//     return (
//       <div className='Navigation'>
//         <nav className='navbar navbar-expand-lg navbar-light bg-light mb-3'>
//         <Link  to='/' className='logoLink'><img className='logo1'src={Logo} alt='My logo' /></Link>
//         <Link  to='/' className='logoLink'><h1 className='headermain'>DrinkStation</h1></Link>
//           <button className={togglerClass} onClick={this.toggleCollapse} data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
//             <span className='navbar-toggler-icon'></span>
//           </button>
//           <div className={targetClass} id='navbarSupportedContent'>
//             <ul className='navbar-nav mr-auto navbar-right'>
//               {/* {user &&
//                 <li className='nav-item'>
//                   <Link className='nav-link' onClick={this.toggleCollapse} style={text} to='/secret' onClick={this.toggleCollapse}>Secret</Link>
//                 </li>}
//             </ul> */}
//             <ul className='navbar-nav'>
//               {user
//                 ? <>
//                   {/* <li className='nav-item'>
//                     <Link className='nav-link' onClick={this.toggleCollapse} style={text} to='/' onClick={this.toggleCollapse}>Home</Link>
//                   </li> */}
//                   <li className='nav-item'>
//                     <Link className='nav-link' onClick={this.toggleCollapse} style={text} to='/navpage' onClick={this.toggleCollapse}>Navpage</Link>
//                   </li>
//                   <li className='nav-item'>
//                     <Link className='nav-link' onClick={this.toggleCollapse} style={text} to='/featured' onClick={this.toggleCollapse}>Featured</Link>
//                   </li>
//                   <li className='nav-item'>
//                     <Link className='nav-link' onClick={this.toggleCollapse} style={text} to='/create' onClick={this.toggleCollapse}>Create</Link>
//                   </li>
//                   <li className='nav-item'>
//                     <Link className='nav-link' onClick={this.toggleCollapse} style={text} to='/search' onClick={this.toggleCollapse}>Search</Link>
//                   </li>
//                   <li className='nav-item'>
//                     <Link className='nav-link' onClick={this.toggleCollapse} style={text} to='/searchAPI' onClick={this.toggleCollapse}>SearchAPI</Link>
//                   </li>
//                   <li className='nav-item'>
//                     <Link className='nav-link' onClick={this.toggleCollapse} style={text} to='/view' onClick={this.toggleCollapse}>Drinks</Link>
//                   </li>
//                   <li className='nav-item'>
//                     <Link className='nav-link' onClick={this.toggleCollapse} style={text} to='/mydrinks' onClick={this.toggleCollapse}>Creations</Link>
//                   </li>
//                   <li className='nav-item'>
//                     <Link className='nav-link' onClick={this.toggleCollapse} style={text} to='/about' onClick={this.toggleCollapse}>About</Link>
//                   </li>
//                   <AuthDropdown onClick={this.toggleCollapse} />
//                 </>
//                 : <>
//                   <li className='nav-item'><Link className='nav-link' onClick={this.toggleCollapse} style={text} to='/login' onClick={this.toggleCollapse} style={text}>Sign in</Link></li>
//                   {/* <li className='nav-item'><Link className='nav-link' onClick={this.toggleCollapse} style={text} to='/register' onClick={this.toggleCollapse} style={text}>Sign up</Link></li> */}
//                 </>}
//             </ul>
//             </ul>
//           </div>
//         </nav>
//       </div>
//     );
//   }
// }

// export default Navigation;