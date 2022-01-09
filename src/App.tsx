import React from "react";
import "./App.css";
import { fetchAllTableData } from './db/Dynamo'
import { addNewUser, updatePoint, resetAllPoints, wipeAllData } from "./db/DataService";

function App() {
  const getData = async () => {
    const result = await addNewUser("green lantern")
    console.log(result)
  }

  return <div className="App">
    <button onClick={getData}>Fetch</button>
  </div>;
}

export default App;
