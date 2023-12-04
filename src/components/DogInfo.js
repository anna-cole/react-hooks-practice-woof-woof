function DogInfo({ dog, onUpdateDog }) {
  
  if (!dog) return <h3>Select a doggo</h3>
  
  function handleClick() {
    fetch(`http://localhost:3001/pups/${dog.id}`, {
      method: 'PATCH',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({isGoodDog: dog.isGoodDog = !dog.isGoodDog})
    })
    .then(r => r.json())
    .then(updatedDog => onUpdateDog(updatedDog))
  }

  return (
    <div id="dog-summary-container">
      <h1>DOGGO:</h1>
      <div id="dog-info">
        <img src={dog.image} alt={dog.name}/>
        <h2>{dog.name}</h2>
        <button onClick={handleClick}>{dog.isGoodDog ? 'Good' : 'Bad'} Dog!</button>
      </div>
    </div>
  )
}

export default DogInfo