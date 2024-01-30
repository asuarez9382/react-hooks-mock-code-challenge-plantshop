import React from "react";

function Search({ plants, setPlants }) {

  function handleChange(e){

    const searchValue = e.target.value.toLowerCase()

    if(searchValue===""){
      fetch("http://localhost:6001/plants")
      .then(res => res.json())
      .then(plantData => setPlants(plantData))
    }
    else {
      const newPlantList = plants.filter(plant => {
        const plantNameLowerCase = plant.name.toLowerCase()
        return plantNameLowerCase.includes(searchValue)
      })
  
      setPlants(newPlantList)
    }

  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
