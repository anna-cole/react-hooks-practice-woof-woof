function DogBar({ dogs, handleClick }) {
  return (
    <div id="dog-bar">
      {dogs.map(dog => <span key={dog.id} onClick={() => handleClick(dog)}>{dog.name}</span>)}
    </div>  
  )
}

export default DogBar