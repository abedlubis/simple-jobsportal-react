import React, { Component } from 'react'
import {Form, Col, Button, Row} from 'react-bootstrap'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import {Consumer} from '../../ContextProvider'

// actions
import {handleLoginManual} from '../../store/reducers/auth/actions'

export class FormLogin extends Component {

  state = {
    email: '',
    password: ''
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleLoginManual(this.state.email, this.state.password)
    this.context.state.showLoginModal = false
  }

  handleChange(name, e) {
    var change = {};
    change[name] = e.target.value;
    this.setState(change);
  }

  render() {
    let {email, password} = this.state
    return (
      <div>
        <Form onSubmit={e => this.handleSubmit(e)}>
            <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={this.handleChange.bind(this, 'email')}/>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={this.handleChange.bind(this, 'password')} />
            </Form.Group>
            <Form.Group as={Row}>
              <Col sm={{ span: 10, offset: 9 }}>
                <Button type="submit">Login</Button>
              </Col>
            </Form.Group>  
        </Form>
      </div>
    )
  }
}
FormLogin.contextType = Consumer;

const mapDispatchToProps = (dispatch) =>  bindActionCreators({
                                           handleLoginManual
                                          }, dispatch)
export default connect(null, mapDispatchToProps)(FormLogin)
