import {useState, useEffect} from 'react'
import {Loader} from 'react-loader-spinner'
import Header from './components/Header'
import './App.css'

const categoriesList = [
  {id: 'ALL', displayText: 'All'},
  {id: 'STATIC', displayText: 'Static'},
  {id: 'RESPONSIVE', displayText: 'Responsive'},
  {id: 'DYNAMIC', displayText: 'Dynamic'},
  {id: 'REACT', displayText: 'React'},
]

const App = () => {
  const [ListItems, setListItems] = useState([])
  const [activeId, setActiveId] = useState(categoriesList[0].id)
  const [isLoading, setIsLoading] = useState('')
  const [isSuccess, setIsSuccess] = useState('')
  const [isFailed, setFailed] = useState('false')

  const getItems = async () => {
    setIsLoading(true)
    const url = `https://apis.ccbp.in/ps/projects?category=${activeId}`
    const response = await fetch(url)
    const data = await response.json()
    const updatedData = data.projects.map(each => ({
      id: each.id,
      imageUrl: each.image_url,
      name: each.name,
    }))
    if (response.ok) {
      setIsSuccess(true)
      setFailed(false)
    } else {
      setIsSuccess(false)

      setFailed(true)
    }
    console.log(updatedData)
    console.log(data)
    console.log(activeId)
    setIsLoading(false)
    setListItems(updatedData)
  }

  useEffect(() => {
    getItems()
  }, [activeId])

  return (
    <div className="container">
      <Header />
      <section>
        <div>
          <select onChange={e => setActiveId(e.target.value)}>
            {categoriesList.map(each => (
              <option value={each.id} key={each.id}>
                {each.displayText}
              </option>
            ))}
          </select>
        </div>
        {isSuccess && (
          <ul>
            {ListItems.map(each => (
              <li key={each.id}>
                <div>
                  <img src={each.imageUrl} alt={each.name} />
                </div>
                <p>{each.name}</p>
              </li>
            ))}
          </ul>
        )}
        {isFailed && (
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/projects-showcase/failure-img.png"
              alt="failure view"
            />
            <h1>Oops! Something Went Wrong</h1>
            <p>We cannot seem to find the page you are looking for</p>
            <button>Retry</button>
          </div>
        )}
        )}
      </section>
    </div>
  )
}

export default App