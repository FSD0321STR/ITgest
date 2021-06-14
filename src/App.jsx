import React, { useState } from 'react'
import './App.css'

import MenuAppBar from './components/LogBar'
import SimpleTabs from './components/TagBar'



function App() {
  const [count, setCount] = useState(0)

  return (

    <div>
      <header>
        <MenuAppBar></MenuAppBar>
        <SimpleTabs></SimpleTabs>
      </header>

        {/* <div id="form">
          <MultilineTextField></MultilineTextField>
          <BasicTextFields></BasicTextFields>
        </div>

        <Button size="large" variant="contained" color="primary">Guardar</Button> */}

       {/* <CollapsibleTable></CollapsibleTable> */}

      <br/>

      <div>

      </div>

    </div>
    
  )
}

export default App

