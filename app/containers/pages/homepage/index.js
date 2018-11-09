import React, { Component } from "react"
import Button from "react-bootstrap/lib/Button"

class Homepage extends Component {
  render() {
    console.log("env is:", process.env)
    return (
      <div className="container homepage">
        <h3 className="homepage__title">App Homepage</h3>
        <Button>Bootstrap Button
        </Button>
        {["asdad", "asds"]}
      </div>
    )
  }
}

export default Homepage
