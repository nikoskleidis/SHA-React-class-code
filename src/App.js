import React from "react";
import "./App.css";
import Pages from "./Pages";
import BasketProvider from "./providers/BasketProvider";

function App() {
  return (
    <div className="App">
      <BasketProvider>
        <Pages />
      </BasketProvider>
    </div>
  );
}

export default App;
