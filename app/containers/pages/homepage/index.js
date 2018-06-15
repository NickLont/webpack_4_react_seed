import React, { Component } from "react"
import Button from "react-bootstrap/lib/Button"

class Index extends Component {
  render() {
    console.log("env is:", process.env.PORT)
    return (
      <div className="container homepage">
        <h3 className="homepage__title">App Homepage</h3>
        <Button>Bootstrap Button</Button>
      </div>
    )
  }
}

export default Index
