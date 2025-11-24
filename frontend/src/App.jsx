import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



flashcardlist = [
  {
    name: "Pizza",
    definition: "italian dish"

  }
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

function showFlashCards() {
  return (
    <>
      <div>
        <ul>
          {flashcardlist.map((word) => (
            <li key={user.name}>{user.definition}</li>
          ))}</ul>

      </div>
    </>
  )
}

function shareWithClassmates() {
  return (
    <>
      <div>
        <p>Type in your classmates email to share with them</p>
        <label for="email">Enter your email</label>
        <input type="email" id="email" name="email"></input>
        <input type="submit"></input>
      </div>
    </>
  )
}

export default App
