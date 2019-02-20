import React, { Component, createContext } from 'react'

const CustomContext = createContext()
export const {Provider, Consumer} = CustomContext

export default class ContextProvider extends Component {
    state = {
        showLoginModal: false,
        showSignUpModal: false
    }

    toggleLoginModal = () => {
        this.setState({
            showLoginModal: !this.state.showLoginModal
        })
    }
    toggleSignUpModal = () => {
        this.setState({
            showSignUpModal: !this.state.showSignUpModal
        })
    }
  render() {
    const {state, toggleLoginModal, toggleSignUpModal} = this
    return (
        <Provider value={{state: state, toggleLoginModal, toggleSignUpModal}}>
            {this.props.children}
        </Provider>
    )
  }
}
