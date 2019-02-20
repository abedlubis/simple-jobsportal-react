import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
import {connect} from 'react-redux'

//actions
import {handleLoginFacebook, handleLoginGoogle} from '../../store/reducers/auth/actions'

export class ButtonLoginAuthGroups extends Component {
    state = {
        buttons : [{ value: 'Facebook', variant: 'primary', icon: 'fab fa-facebook-square', action: this.props.handleLoginFacebook}, { value: 'Google', variant: 'danger', icon: 'fab fa-google-plus-square',  action: this.props.handleLoginGoogle}]
    }
  render() {
        const {buttons} = this.state
    return (
      <div>
        <div className="d-flex flex-column justify-content-center">
            <p className="text-center"> <b>or Login with</b> </p>
            { buttons.map((b, index) => {
                return (
                <div className="d-flex justify-content-center" key={index}>
                    <Button onClick={b.action} className="my-2" style={{width: "200px"}} type="button" variant={b.variant}> <div className="d-flex justify-content-center align-items-center">  <span style={{fontSize: '1.5rem', marginRight: '10px'}}><i className={b.icon}></i> </span> {b.value} </div> </Button>
                </div>
                )
            })}
            
        </div>
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => ({
  handleLoginFacebook: () => dispatch(handleLoginFacebook()),
  handleLoginGoogle: () => dispatch(handleLoginGoogle())
})

export default connect(null, mapDispatchToProps)(ButtonLoginAuthGroups)
