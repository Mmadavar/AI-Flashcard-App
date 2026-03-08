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

// function for export flashcards/options in CSV or anki(.apkg) format
function exportFlashcards() {
  return (
    <>
      <div>
        <button onClick={exportCSV}>Export to CSV format</button>
      </div>
      <div> 
        <button onClick={exportAnki}>Export to Anki (.apkg) format</button>
      </div>
    </>

  )
}

// export to .apkg format
function exportAnki() {
  return (
    <></>

    )

}

// export to .csv format
function exportCSV() {
  return (
    <></>
  )
}




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

function ShareWithClassmates() {
  const [email, setEmail] = useState("")

  function handleEmailSubmit(e) {
    e.preventDefault()
    console.log("Email submitted: ", email);
    // logic to share flashcards with the email provided

  }

  return (
      <div>
        <p>Type in your classmates email to share with them</p>
        <form onSubmit={handleEmailSubmit}>
          <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <button type="submit">Share here</button>
        </form>
      </div>
  );
}

export default App
