import {useState} from 'react'
import './App.css'

// Replace your code here
const App = () => {
  const [editable, setEditable] = useState(true)
  const [text, setText] = useState('')

  const handleClick = () => {
    setEditable(!editable)
  }

  return (
    <div className="container">
      <div className="textCard">
        <h1>Editable Text Input</h1>
        <div className="dflex">
          {editable ? (
            <div>
              <input
                value={text}
                onChange={e => setText(e.target.value)}
                type="text"
              />
            </div>
          ) : (
            <p>{text}</p>
          )}
          <button onClick={handleClick}>{editable ? 'Save' : 'Edit'}</button>
        </div>
      </div>
    </div>
  )
}
export default App
