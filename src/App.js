import React from 'react';
import './App.css';
import HouseList from './Components/HouseList';

function App() {
  return (
    <div className="App">
      <h1>Resident Board</h1>
      <h3>Use the form below to add your house to the Resident Board! Use the edit and delete buttons on each house to make changes</h3>
      <img src="https://api.claytonhomes.com/images/MFG/EXT/a890af24-c579-4f6d-831a-89ff51d2541e.png?width=550" alt="Manufactured home model on the edge of the woods." />
      <HouseList />      
    </div>
  );
}

export default App;
