import React from 'react'
import Helmet from 'react-helmet'
import { config } from 'config'

export default class ReactComponent extends React.Component {
  constructor () {
    super()
    this.state = { count: 0 }
  }

  handlePlusClick () {
    this.setState({ count: this.state.count + 1 })
  }

  handleMinusClick () {
    this.setState({ count: this.state.count - 1 })
  }

  render () {
    return (
      <div>
        <Helmet
          title={`${config.siteTitle} | React.js components`} 
        />
        <h1>React.js components</h1>
        <h3>Counter example</h3>
        <p>{this.state.count}</p>
        <button onClick={() => this.handlePlusClick()}>+</button>
        <button onClick={() => this.handleMinusClick()}>-</button>
      </div>
    )
  }
}
