// Write your JS code here
import './index.css'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

const Login = props => {
  const JWTToken = Cookies.get('jwt_token')
  if (JWTToken !== undefined) {
    return <Redirect to="/" />
  }

  const setCookiesAndNavigateToHome = token => {
    // console.log(token)
    // console.log(props.history)
    const {history} = props
    Cookies.set('jwt_token', token, {expires: 30, path: '/'})
    history.replace('/')
  }

  const onClickLogin = async () => {
    const userDetails = {username: 'rahul', password: 'rahul@2021'}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const responseFetch = await fetch(url, options)
    //  console.log(responseFetch)
    // here we get the jwt token
    const fetchedData = await responseFetch.json()
    // console.log(fetchedData)
    if (responseFetch.ok === true) {
      setCookiesAndNavigateToHome(fetchedData.jwt_token)
    }
  }

  return (
    <div className="login-container">
      <h1 className="login-heading">Please Login</h1>
      <button className="login-button" type="button" onClick={onClickLogin}>
        Login with sample Creds
      </button>
    </div>
  )
}

export default Login
