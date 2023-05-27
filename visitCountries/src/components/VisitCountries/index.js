import React, {useState} from 'react'
import './index.css'

const VisitCountries = props => {
  const {initialCountriesList} = props
  const [countriesList, setCountriesList] = useState(initialCountriesList)

  const handleVisited = id => {
    const updatedItem = countriesList.map(each => {
      if (each.id === id) {
        return {...each, isVisited: !each.isVisited}
      }
      return each
    })
    // const handleVisit = {...updatedItem, isVisited: !isVisited}
    // setCountriesList(countriesList.map.each=>each.id.isVisited!)
    console.log(updatedItem)
    // console.log(handleVisit)
    setCountriesList(updatedItem)
  }

  const removeItem = id => {
    const updatedItem = countriesList.map(each => {
      if (each.id === id) {
        return {...each, isVisited: !each.isVisited}
      }
      return each
    })
    setCountriesList(updatedItem)
  }

  return (
    <div className="container">
      <h1>Countries</h1>
      <ul className="countriesListContainer">
        {countriesList.map(each => (
          <li key={each.id} className="countriesListItems">
            <p>{each.name}</p>
            <div>
              {each.isVisited ? (
                <p>Visited</p>
              ) : (
                <button
                  onClick={() => handleVisited(each.id)}
                  className={each.isVisited ? 'inactiveBtn' : 'activeBtn'}
                >
                  Visit
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
      <h1>Visited Countries</h1>
      <ul className="visitedCountries">
        {countriesList
          .filter(each => each.isVisited === true)
          .map(each => (
            <li key={each.id}>
              <div className="visitedContainer">
                <img src={each.imageUrl} alt="thumbnail" />
                <div className="dflex">
                  <p>{each.name}</p>
                  <div>
                    <button
                      onClick={() => removeItem(each.id)}
                      className="removeBtn"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default VisitCountries
