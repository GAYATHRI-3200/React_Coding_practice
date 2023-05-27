import React, {Component} from 'react'
import {v4} from 'uuid'
import './App.css'

export default class App extends Component {
  state = {wordList: [], inputWord: ''}

  getWord = e => {
    this.setState({inputWord: e.target.value})
  }

  addItem = () => {
    const {wordList, inputWord} = this.state
    const newWord = {
      id: v4(),
      word: inputWord,
    }
    this.setState({wordList: [...wordList, newWord], inputWord: ''})
  }

  render() {
    const {wordList, inputWord} = this.state
    console.log(wordList)
    console.log(inputWord)
    return (
      <div className="container">
        <div className="cardContainer">
          <div className="yellow itemsCount">
            <h1>Count the characters like a Boss...</h1>
            {wordList.length > 0 ? (
              <ul>
                {wordList.map(each => (
                  <li key={each.id}>
                    <p>
                      {each.word} : {each.word.length}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <img
                className="noUser"
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user inputs"
              />
            )}
          </div>
          <div className="blue">
            <h1 className="counterText">Character Counter</h1>
            <div>
              <form>
                <input
                  onChange={this.getWord}
                  value={inputWord}
                  type="text"
                  placeholder="Enter the Characters here"
                />
                <button onClick={this.addItem}>Add</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
