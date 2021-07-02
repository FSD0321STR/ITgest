import React, { useState } from "react";
import UserManager from "./pages/user-manager";
import Login from "./pages/login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AuthProvider from "./contexts/auth-provider";

function App() {
  return (
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
  );
}

export default App;
