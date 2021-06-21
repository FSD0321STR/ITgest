import React, { useState } from 'react'
import './App.css'
import { FormCreateProduct } from './components/FormCreateProduct/FormCreateProduct'

// import MenuAppBar from './components/LogBar'
// import SimpleTabs from './components/TagBar'



function App() {
  const [count, setCount] = useState(0)

  return (

    <div>
      <header>
        {/* <MenuAppBar></MenuAppBar>
        <SimpleTabs></SimpleTabs> */}
        <FormCreateProduct />


      </header>
    </div>
    
  )
}

export default App

