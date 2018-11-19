import React, { Component } from "react"
import Button from "react-bootstrap/lib/Button"
import { TestComponent } from "components"
import { connect } from 'react-redux'
import { UserActions } from 'actions'
import { PropTypes } from 'prop-types'
import { UserSelector } from 'selectors'

class Homepage extends Component {
  onClick = () => {
    const { user, error, fetchUser } = this.props
    fetchUser('Nick')
    console.log('user: ', user)
    console.log('error: ', error)
  }

  render() {
    // console.log("env is:", process.env)
    return (
      <div className="container homepage">
        <h3 className="homepage__title">App Homepage</h3>
        <TestComponent />
        <Button onClick={this.onClick}>Bootstrap Button</Button>
      </div>
    )
  }
}
Homepage.propTypes = {
  user: PropTypes.object,
  error: PropTypes.object,
  fetchUser: PropTypes.func
}

const mapStateToProps = state => {
  return {
    user: UserSelector.getUser(state),
    userError: UserSelector.getUserError(state)
  }
}
const mapDispatchToProps = dispatch => ({
  fetchUser: () => dispatch(UserActions.fetchUser('Nick'))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Homepage)
