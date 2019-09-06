import React, { Component } from 'react'
import { connect } from 'react-redux'
import { UserSelector } from 'selectors'

// connected High Order Component to pass the User to wrapped components
const withUser = (WrappedComponent) => {
  const Wrapper = () => (
    class HOC extends Component {
      render() {
        return <WrappedComponent {...this.props} />
      }
    }
  )
  return connect(mapStateToProps)(Wrapper())
}
const mapStateToProps = (state) => ({
  user: UserSelector.getUserData(state)
})

export default withUser
