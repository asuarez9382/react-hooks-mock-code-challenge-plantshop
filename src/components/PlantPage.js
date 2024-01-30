import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([])
  const [newPlant, setNewPlant] = useState({
    name:"",
    image:"",
    price:""
  })


  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(res => res.json())
      .then(plantData => setPlants(plantData))
  },[])

  return (
    <main>
      <NewPlantForm
        plants={plants}
        setPlants={setPlants}
        newPlant={newPlant}
        setNewPlant={setNewPlant}
      />
      <Search 
        plants={plants}
        setPlants={setPlants}
      />
      <PlantList
        plants={plants}
      />
    </main>
  );
}

export default PlantPage;
