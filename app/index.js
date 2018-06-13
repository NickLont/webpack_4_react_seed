import React, { Component } from "react"
import ReactDOM from "react-dom"
import "./assets/sass/style.scss"

class App extends Component {
  render() {
    return (
      <p className="index-page__title">
        React index page
        <img
          src="./assets/images/beach-exotic-holiday-248797.jpg"
          alt="testImg"
        />
      </p>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"))
