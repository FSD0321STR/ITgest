import React, { useState } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import { NavBar } from "./pages/NavBar";
import { FormCreateProduct } from "./components/FormCreateProduct/FormCreateProduct";
import { ProductCreated } from "./components/ProductCreated/ProductCreated";
import { OrderList } from "./components/OrderProduct/OrderList";
import StickyHeadTable from "./components/dashboard"




function App() {
  
  return (
      <div className="App">
        <BrowserRouter>
          <NavBar />
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
              <Route exact path="/stock">
                <StickyHeadTable />
              </Route>          
            </Switch>
        </BrowserRouter>
                
      </div>
  );
}

export default App;
