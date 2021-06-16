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
    </div>
    
  )
}

export default App

