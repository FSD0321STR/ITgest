import React, { useState } from "react";
//import logo from './logo.svg'
import "./App.css";
import "@fontsource/roboto";
import Button from "@material-ui/core/Button";
import Orders from "./components/dashboard";


function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Button variant="Pruebatext" color="red">
          Hola
          
        </Button>
        <Orders color= "red">

        </Orders>
        
      </header>
    </div>
  );
}

export default App;
