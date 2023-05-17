// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {inputValue: '', inputLength: 0}

  onChangeInputValue = event => {
    const typed = event.target.value
    this.setState({inputValue: typed, inputLength: typed.length})
  }

  render() {
    const {inputValue, inputLength} = this.state
    return (
      <div className="container">
        <div className="bg-container">
          <div className="text-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <label htmlFor="inputEl" className="label">
              Enter the phrase
            </label>
            <br />
            <input
              id="inputEl"
              type="text"
              className="inputEle "
              placeholder="Enter the phrase"
              value={inputValue}
              onChange={this.onChangeInputValue}
            />
            <p className="count-head">No.of Letters: {inputLength}</p>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="letters calculator"
              className="image"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
