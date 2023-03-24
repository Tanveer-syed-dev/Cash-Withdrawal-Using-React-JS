// Write your code here
import './index.css'
import {Component} from 'react'

class DenominationItem extends Component {
  onClickSendDenomination = () => {
    const {denominations, getDenominationsValues} = this.props
    const {value} = denominations
    getDenominationsValues(value)
  }

  render() {
    const {denominations} = this.props
    const {value} = denominations

    return (
      <li className="denomination-items">
        <button type="button" onClick={this.onClickSendDenomination}>
          {value}
        </button>
      </li>
    )
  }
}

export default DenominationItem
