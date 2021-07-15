import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

import  Login  from '../pages/Login';
import { DashboardRoutes } from '../routers/DashboardRoutes';
import PrivateRoute from "../components/User/PrivateRoute";
import AuthProvider  from "../contexts/auth-provider";


const AppRouters = () => {
    return (
        <AuthProvider>
        <Router>
            <div>
                <Switch>
                    <Route exact path="/login"      component={ Login } />
                    <PrivateRoute path="/"          component={ DashboardRoutes } />                    
                </Switch>
            </div>
      </Router>
      </AuthProvider> 
    );
}

export default AppRouters;