import React from "react";
import ListOfBooks from "./components/ListOfBooks";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Welcome</h1>
      <ListOfBooks />
      <button className="primary-btn">Add book</button>
    </div>
  );
}

export default App;
