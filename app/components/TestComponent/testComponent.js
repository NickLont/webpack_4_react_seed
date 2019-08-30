import React, { useState, useEffect } from "react"

import Button from 'react-bootstrap/Button'

const TestComponent = () => {
  // Declaring a new state variable, its handler and the initial value
  const [number, setNumber] = useState(0)

  // similar usage to componentDidMount and componentDidUpdate
  // When we call useEffect, React runs your “effect” function after flushing changes to the DOM
  // By default, React runs the effects after every render

  useEffect(() => {
    document.title = `You clicked ${number} times`

    // we can also "clean up" when the component unmounts
    return () => {
      // do something
    }
  })

  return (
    <div className="test-component">
      <p>Test component using hooks:  {number}</p>
      <Button
        onClick={() => setNumber(number + 1)}
      >
        Press to increment
      </Button>
    </div>
  )
}

export default TestComponent
