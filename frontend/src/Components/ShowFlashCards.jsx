import flashcardlist from '../App'

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

export default showFlashCards;