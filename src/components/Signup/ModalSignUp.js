import React, { Component } from 'react'
import {Modal} from 'react-bootstrap'

//components
import FormSignUp from './FormSignup';
import ButtonLoginAuthGroups from '../Login/ButtonLoginAuthGroups';

export class ModalSignUp extends Component {
  render() {
      
    return (
      <div>
        <Modal {...this.props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Sign Up 
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <FormSignUp/>
            </Modal.Body>
        </Modal>
      </div>
    )
  }
}


export default ModalSignUp
