import React, { Component } from 'react'
import {Form, Col, Button} from 'react-bootstrap'
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'
import {Consumer} from '../../ContextProvider'

// actions
import {handleSignUp} from '../../store/reducers/auth/actions'

export class FormSignUp extends Component {

  state = {
    email: '',
    password: ''
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleSignUp(this.state.email, this.state.password)
    this.context.state.showSignUpModal = false
  }
  
  handleChange(name, e) {
    var change = {};
    change[name] = e.target.value;
    this.setState(change);
  }

  render() {
    let {email,password} = this.state
    return (
      <div>
        <Form onSubmit={e => this.handleSubmit(e)}>
            <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={this.handleChange.bind(this, 'email')}/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={this.handleChange.bind(this, 'password')}/>
            </Form.Group>
            <Button type="submit">Submit form</Button>
        </Form>
      </div>
    )
  }
}
FormSignUp.contextType = Consumer;

const mapDispatchToProps = (dispatch) => bindActionCreators({
                                            handleSignUp
                                        }, dispatch)

export default connect(null, mapDispatchToProps)(FormSignUp)
