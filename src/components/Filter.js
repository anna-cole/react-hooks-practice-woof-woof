function Filter({ filter, handleFilter }) {
  return (
    <div id="filter-div">
      <button id="good-dog-filter" onClick={handleFilter}>'Filter good dogs: {filter ?  'ON' : 'OFF'}</button>
    </div>
  )
}

export default Filter