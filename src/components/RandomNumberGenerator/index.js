/* eslint-disable no-unused-vars */
// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  onGenerateNum = () => {
    const floatValue = Math.random() * 100
    const integerValue = Math.ceil(floatValue)
    this.setState({count: integerValue})
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="sub-container">
          <h1>Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <button type="button" className="button" onClick={this.onGenerateNum}>
            Generate
          </button>
          <p className="count">{count}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
