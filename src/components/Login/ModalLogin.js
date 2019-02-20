import React, { Component } from 'react'
import {Modal} from 'react-bootstrap'

//components
import FormLogin from './FormLogin';
import ButtonLoginAuthGroups from './ButtonLoginAuthGroups';

export class ModalLogin extends Component {
  render() {
      
    return (
      <div>
        <Modal {...this.props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Login 
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <FormLogin/>
            <hr/>
            <ButtonLoginAuthGroups/>
            </Modal.Body>
        </Modal>
      </div>
    )
  }
}


export default ModalLogin
