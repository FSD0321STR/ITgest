import React, { useState } from "react";
import "./App.css";
import "@fontsource/roboto";
import MenuAppBar from './components/LogBar'
import SimpleTabs from './components/TagBar'
import Footer from "./components/Footer";
import NestedGrid from "./components/Footer";


// import Orders from "./components/dashboard";



function App() {
  
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body>

      <MenuAppBar />
      <SimpleTabs />
      <Footer />

      </body>
    </div>
  );
}

export default App;
