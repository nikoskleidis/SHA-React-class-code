import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from "./components/Title"
import User from "./components/User"
import Menu from "./components/Menu";
import Alert from "./components/Alert";
import Counter from "./components/Counter";

const nikosUser = {
  name: "nikos",
  surname: "kleidis",
  address: "Heraklion",
  postal: 12345,
  job: "developer",
  hobbies: [{
    name: "netflix",
    years: 3
  }, {
    name: "gym",
    years: 30
  }, {
    name: "biking",
    years: 30
  }]
}

function App() {
  return (
    <div className="App">
      <Menu />
      <Title color={"green"} subtitle={"subtitle text"}>
        This is a child title
      </Title>
      <Title color={"red"}>
        This is another title
      </Title>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Counter />
        <Alert className={"testAlert"}>
          This is an alert!!!
        </Alert>
        <Alert type="warning">
          This is a warning
        </Alert>
        <Alert type="success">
          Success. Coronavirus has ended
        </Alert>
        <Alert type="error">
          no it has not....
        </Alert>
      </header>
      <User {...nikosUser} />
    </div>
  );
}

export default App;
