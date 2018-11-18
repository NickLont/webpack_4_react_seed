import React, { Component } from "react"
import { Provider } from 'react-redux'
import configureStore from './store'
import ReactDOM from "react-dom"
import "assets/sass/style.scss"
import Homepage from "containers/pages/homepage"

class App extends Component {
  render() {
    return <Homepage />
  }
}
const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
)
