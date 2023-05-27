import React, {Component} from 'react'
import Loader from 'react-loader-spinner'
import './App.css'

export default class App extends Component {
  state = {travelList: [], isLoading: true}

  componentDidMount() {
    this.getTravelDetails()
  }

  getTravelDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/tg/packages')
    const data = await response.json()
    const updatedData = data.packages.map(each => ({
      description: each.description,
      id: each.id,
      imageUrl: each.image_url,
      name: each.name,
    }))
    console.log(data)
    console.log(updatedData)
    this.setState({travelList: updatedData, isLoading: false})
  }

  render() {
    const {travelList, isLoading} = this.state
    return (
      <div className="container">
        <h1 className="heading">Travel Guide</h1>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <ul>
            {travelList.map(each => (
              <li key={each.id}>
                <div>
                  <img src={each.imageUrl} alt={each.name} />
                  <h1>{each.name}</h1>
                  <p>{each.description}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }
}

