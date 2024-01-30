import React from "react";

function NewPlantForm({ plants, setPlants, newPlant, setNewPlant }) {


  function handleChange(e){
    const { name, value } = e.target;
    setNewPlant((prevPlant) => ({
      ...prevPlant,
      [name]: value,
    }));
    console.log(newPlant)

  }

  function handleSubmit(e) {
    e.preventDefault()

    //Add a fetch request method: POST
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPlant)
    })
      .then(res => res.json())
      .then(plantData => setPlants(()=> {
        return [...plants, plantData]
      }))


  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Plant name" 
          value={newPlant.name} 
          onChange={handleChange}
        />
        <input 
          type="text" 
          name="image" 
          placeholder="Image URL" 
          value={newPlant.image}
          onChange={handleChange} 
        />
        <input 
          type="number" 
          name="price" 
          step="0.01" 
          placeholder="Price" 
          value={newPlant.price}
          onChange={handleChange}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
