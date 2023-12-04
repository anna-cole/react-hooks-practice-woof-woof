import React, {useState, useEffect} from "react";
import Filter from "./Filter";
import DogBar from "./DogBar";
import DogInfo from "./DogInfo";

function App() {
  const [dogs, setDogs] = useState([])
  const [dog, setDog] = useState('')
  const [filter, setFilter] = useState(false)

  useEffect(() => {
    fetch('http://localhost:3001/pups')
    .then(r => r.json())
    .then(dogs => setDogs(dogs))
  }, [])

  function handleFilter() {
    setFilter(filter => !filter)
  }

  const filteredArr = dogs.filter(dog => filter === true ? dog.isGoodDog : dog)

  function onUpdateDog(updatedDog) {
    const updatedArr = dogs.map(dog => dog.id === updatedDog.id ? updatedDog : dog)
    setDogs(updatedArr)
  }

  return (
    <div className="App">
      <Filter filter={filter} handleFilter={handleFilter}/>
      <DogBar dogs={filteredArr} handleClick={setDog}/>
      <DogInfo dog={dog} onUpdateDog={onUpdateDog}/> 
    </div>
  );
}

export default App;
