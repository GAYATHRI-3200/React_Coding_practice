// Write your code here
import { Component } from 'react'

import './index.css'

class Speedometer extends Component {
    state = {
        speed: 0,
    }

    onAccelerate = () => {
        const { speed } = this.state
        if (speed < 200) {
            this.setState(prevState => ({ speed: prevState.speed + 10 }))
        }
    }

    onBrake = () => {
        const { speed } = this.state
        if (speed > 0) {
            this.setState(prevState => ({ speed: prevState.speed - 10 }))
        }
    }

    render() {
        const { speed } = this.state

        return (
            <div className="bg-container">
                <h1 className="heading">SPEEDOMETER</h1>
                <img
                    className="img-size"
                    src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
                    alt="speedometer"
                />
                <h1 className="heading">Speed is {speed}mph</h1>

                <p className="text">Min Limit is 0mph, Max Limit is 200mph</p>
                <div>
                    <button
                        type="button"
                        className="speed-btn"
                        onClick={this.onAccelerate}
                    >
                        Accelerate
          </button>
                    <button type="button" className="brake-btn" onClick={this.onBrake}>
                        Apply Brake
          </button>
                </div>
            </div>
        )
    }
}

export default Speedometer