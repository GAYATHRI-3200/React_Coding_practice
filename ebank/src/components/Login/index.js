import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

export default class Login extends Component {
  state = {uid: '', password: '', error: ''}

  getuid = e => {
    this.setState({uid: e.target.value})
  }

  getPassword = e => {
    this.setState({password: e.target.value})
  }

  submitDetails = async () => {
    const {uid, password, error} = this.state
    const LoginDetails = {
      user_id: uid,
      pin: password,
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(LoginDetails),
    }
    const response = await fetch('https://apis.ccbp.in/ebank/login', options)
    const data = await response.json()
    if (response.ok) {
      const JwtToken = data.jwt_token
      Cookies.set('jwt_token', JwtToken, {expires: 1})
      const {history} = this.props
      history.replace('/')
    } else {
      this.setState({error: data.error_msg})
    }
    console.log(data)
  }

  handleLogin = e => {
    e.preventDefault()
    this.submitDetails()
  }

  render() {
    const {error} = this.state
    return (
      <div className="login">
        <div className="loginCard">
          <div className="imgBg">
            <Link to="/">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
                alt="website login"
              />
            </Link>
          </div>
          <div className="formCard">
            <h1>Welcome Back!</h1>
            <form onSubmit={this.handleLogin}>
              <label htmlFor="uid">User ID</label>
              <br />
              <input
                placeholder="Enter User ID"
                onChange={this.getuid}
                id="uid"
                type="text"
              />
              <br />
              <label htmlFor="pin">PIN</label>
              <br />
              <input
                placeholder="Enter PIN"
                onChange={this.getPassword}
                id="pin"
                type="password"
              />
              <br />
              <button>Login</button>
              <p>{error}</p>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
