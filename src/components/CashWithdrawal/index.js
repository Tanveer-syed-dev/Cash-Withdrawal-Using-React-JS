// Write your code here
import './index.css'
import {Component} from 'react'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {userAmount: 2000}

  getDenominationsValues = value => {
    const {userAmount} = this.state
    if (userAmount >= value) {
      this.setState(prevState => ({userAmount: prevState.userAmount - value}))
    }
  }

  render() {
    const {userAmount} = this.state
    const {denominationsList} = this.props
    return (
      <div className="CashWithdrawal-bg-container">
        <div className="CashWithdrawal-container">
          <div className="user-profile">
            <div className="first-char">
              <p className="first-char">S</p>
            </div>
            <p className="user-name">Syed Tanveer</p>
          </div>
          <div className="user-account-balance">
            <p className="user-balance-text">Your Balance</p>
            <div className="user-amount-container">
              <p className="amount">{userAmount}</p>
              <p className="amount-in-words">In Rupees</p>
            </div>
          </div>
          <p className="withdraw-text">Withdraw</p>
          <div className="denomination-container">
            <p className="choose-denomination-text">CHOOSE SUM (IN RUPEES)</p>
            <ul className="denominationItemsList-container">
              {denominationsList.map(eachItem => (
                <DenominationItem
                  key={eachItem.id}
                  denominations={eachItem}
                  getDenominationsValues={this.getDenominationsValues}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
