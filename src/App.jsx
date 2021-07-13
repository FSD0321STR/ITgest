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
import StickyHeadTable from "./components/TableStock";
import  Footer  from "./pages/Footer";
import UserManager from "./pages/user-manager";
import Login from "./pages/Login"





function App() {
  
  return (
      <div className="App">
        <BrowserRouter>
          <NavBar />
            <Switch>    
              <Route exact path="/">
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/product">
                <FormCreateProduct />
                <ProductCreated />
              </Route>
              <Route exact path="/order">
                <OrderList />
              </Route> 
              <Route exact path="/stock">
                <StickyHeadTable />
              </Route>
              <Route exact path="/userAdmin">
              <UserManager />
              </Route>  
            </Switch>
       
          <Footer />
        </BrowserRouter>
                
      </div>
  );
}

export default App;
