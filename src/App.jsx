import React, { useState } from "react";
<<<<<<< HEAD
import UserManager from "./pages/user-manager";
import Login from "./pages/login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthProvider from "./contexts/auth-provider";
=======
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
import Login from "./pages/Login";
import {Contact} from "./pages/Contact"
import { Privacy } from "./pages/Privacy";




>>>>>>> Prueba

function App() {
  return (
<<<<<<< HEAD
    <AuthProvider>

      <Router>
        <Switch>
          <Route path="/userAdmin">
            <UserManager />
          </Route>
        </Switch>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>


=======
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
              <Route exact path="/contact">
                <Contact />
              </Route>  
              <Route exact path="/privacy">
                <Privacy />
              </Route>  

            </Switch>
       
          <Footer />
        </BrowserRouter>
                
      </div>
>>>>>>> Prueba
  );
}

export default App;
