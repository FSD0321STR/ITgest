import React, { useState } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import { NavBar } from "./pages/NavBar";
import { FormCreateProduct } from "./components/FormCreateProduct/FormCreateProduct";
import { ProductCreated } from "./components/ProductCreated/ProductCreated";
import { OrderList } from "./components/OrderProduct/OrderList"


// import "@fontsource/roboto";
// import MenuAppBar from './components/LogBar'
// import SimpleTabs from './components/TagBar'
// import AppRouters from './routers/AppRouters'
// import Footer from "./components/Footer";
// import NestedGrid from "./components/Footer";

// import Orders from "./components/dashboard";



function App() {
  
  return (
      <div className="App">
        <BrowserRouter>
        <NavBar />
        <hr />

        <Switch>
                    

          <Route exact path="/">
            
          </Route>

          <Route exact path="/product">
            <FormCreateProduct />
            
            <ProductCreated />
            

          </Route>

          <Route exact path="/order">
            <OrderList />
            <OrderList />

          </Route>


                    
        </Switch>

        </BrowserRouter>
                
      </div>
  );
}

export default App;
