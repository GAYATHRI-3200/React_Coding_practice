import {useState} from 'react'
import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
const App = () => {
  const [activeItem, setActiveItem] = useState(languageGreetingsList[0])

  const changeImage = id => {
    const activeItemOnClick = languageGreetingsList.filter(
      each => each.id === id,
    )
    console.log(activeItemOnClick)

    setActiveItem(activeItemOnClick[0])
  }
  const {imageUrl, imageAltText} = activeItem
  console.log(imageUrl)
  console.log(imageAltText)

  return (
    <div>
      <h1>Multilingual Greetings</h1>
      <div>
        <ul>
          {languageGreetingsList.map(each => (
            <li key={each.id}>
              <button onClick={() => changeImage(each.id)}>
                {each.buttonText}
              </button>
            </li>
          ))}
        </ul>
        <img src={imageUrl} alt={imageAltText} />
      </div>
    </div>
  )
}

export default App