import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AuthProvider from "./contexts/auth-provider";
import { NavBar } from "./pages/NavBar";
import { FormCreateProduct } from "./components/FormCreateProduct/FormCreateProduct";
import { ProductItem } from "./components/ProductCreated/ProductItem";
import { OrderList } from "./components/OrderProduct/OrderList";
import StickyHeadTable from "./components/TableStock";
import Footer from "./pages/Footer";
import UserManager from "./pages/user-manager";
import Login from "./pages/Login";
import { Contact } from "./pages/Contact";
import { Privacy } from "./pages/Privacy";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path="/"></Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/product">
              <FormCreateProduct />
              <ProductItem />
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
      </AuthProvider>
    </div>
  );
}

export default App;
