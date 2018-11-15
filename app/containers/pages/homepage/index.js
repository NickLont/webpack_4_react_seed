import React, { Component } from "react"
import Button from "react-bootstrap/lib/Button"
import { TestComponent } from "components"

class Homepage extends Component {
  render() {
    console.log("env is:", process.env)
    return (
      <div className="container homepage">
        <h3 className="homepage__title">App Homepage</h3>
        <TestComponent />
        <Button>Bootstrap Button</Button>
      </div>
    )
  }
}

export default Homepage
