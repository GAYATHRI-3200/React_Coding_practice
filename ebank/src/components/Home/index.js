import React, {Component} from 'react'
import Cookies from 'js-cookie'
import './index.css'

export default class Home extends Component {
  handleLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/ebank/login')
  }

  render() {
    return (
      <div className="home">
        <div className="navbar">
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
              alt="website logo"
            />
          </div>
          <div>
            <button onClick={this.handleLogout}>Logout</button>
          </div>
        </div>
        <div className="creditCard">
          <h1>Your Flexibility, Our Excellence</h1>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
              alt="digital card"
            />
          </div>
        </div>
      </div>
    )
  }
}
