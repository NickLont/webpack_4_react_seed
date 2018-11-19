import React, { Component } from "react"
import Button from "react-bootstrap/lib/Button"
import { TestComponent } from "components"
import { connect } from 'react-redux'
import { UserActions } from 'actions'
import { PropTypes } from 'prop-types'

class Homepage extends Component {
  render() {
    const { user } = this.props
    // console.log("env is:", process.env)
    console.log('user: ', user)
    return (
      <div className="container homepage">
        <h3 className="homepage__title">App Homepage</h3>
        <TestComponent />
        <Button onClick={this.props.fetchUser}>Bootstrap Button</Button>
      </div>
    )
  }
}
Homepage.propTypes = {
  user: PropTypes.object,
  fetchUser: PropTypes.func
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}
const mapDispatchToProps = dispatch => ({
  fetchUser: () => dispatch(UserActions.fetchUser('Nick'))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Homepage)
