import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {Consumer} from '../ContextProvider'

//actions
import {handleLoginFacebook, checkLogin, handleLogout} from '../store/reducers/auth/actions'
import ModalLogin from './Login/ModalLogin';
import ModalSignUp from './Signup/ModalSignUp';

class MainNavbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  componentDidMount(){
    this.props.checkLogin()
  }
  
  render() {
    const {isLogin, handleLogout} = this.props
    return (
      <Consumer>
        {(context) => (
          <div> 
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
              <div className="container">
                <Navbar.Brand as={Link} to="/">JOBS PORTAL</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="ml-auto">
                  <Nav.Link as={Link} to="/jobs"> Jobs </Nav.Link>
                    <Nav.Link as={Link} to="/about"> About </Nav.Link>
                    <Nav.Link as={Link} to="/contact"> Contact Us  </Nav.Link>
                    <NavDropdown title={ <span><i className="fa fa-user fa-fw"></i> </span> }  id="collasible-nav-dropdown">
                      { isLogin === false && 
                        <span>
                          <NavDropdown.Item onClick={context.toggleLoginModal}>Login</NavDropdown.Item>
                          <NavDropdown.Item onClick={context.toggleSignUpModal}>Register</NavDropdown.Item> 
                        </span>
                      }    
                      { isLogin === true && 
                        <span>
                          <NavDropdown.Item>Profile</NavDropdown.Item> 
                          <NavDropdown.Divider /> 
                          <NavDropdown.Item as={Link} to="/" onClick={handleLogout}>Logout</NavDropdown.Item>
                        </span> 
                      }
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
              </div>
            </Navbar>
            <ModalLogin show={context.state.showLoginModal} onHide={context.toggleLoginModal}></ModalLogin>
            <ModalSignUp show={context.state.showSignUpModal} onHide={context.toggleSignUpModal}></ModalSignUp>
          </div>
        )}
      </Consumer>
    )
  }
}

const mapStateToProps = (state) => ({
    isLogin: state.auth.isLogin
})

const mapDispatchToProps = (dispatch) => ({
  handleLoginFacebook: () => dispatch(handleLoginFacebook()),
  checkLogin: () => dispatch(checkLogin()),
  handleLogout: () => dispatch(handleLogout())
})
// const mapDispatchToProps = function (dispatch) {
//   return {
//     handleLoginFacebook: function() {
//       console.log("terpanggil")
//       return dispatch(handleLoginFacebook())
//     }
//   }
// }


// const mapDispatchToProps = (dispatch) => bindActionCreators({
//                                             handleLoginFacebook
//                                           }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(MainNavbar) 
