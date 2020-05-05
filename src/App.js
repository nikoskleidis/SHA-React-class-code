import React from 'react';
import './App.css';
import DogOfTheYear from "./components/DogOfTheYear";
import DogOfTheMonth from "./components/DogOfTheMonth";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DogOfTheYear />
        <DogOfTheMonth />
      </header>
    </div>
  );
}

export default App;
