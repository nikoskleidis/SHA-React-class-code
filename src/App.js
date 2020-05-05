import React from 'react';
import './App.css';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TextField id="standard-basic" label="Standard" />
        <Button variant="contained" color="primary">
          Primary
        </Button>
      </header>
    </div>
  );
}

export default App;
