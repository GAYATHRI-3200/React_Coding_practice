// Write your JS code here
import './index.css'
import Header from '../Header'
import LogoutButton from '../LogoutButton'

const About = () => (
  <div>
    <Header />
    <div className="about-container">
      <h1 className="about-heading">About Route</h1>
      <LogoutButton />
    </div>
  </div>
)

export default About
