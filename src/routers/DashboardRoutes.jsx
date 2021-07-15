import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';

import  { FormCreateProduct }   from '../components/FormCreateProduct/FormCreateProduct'
import { ProductItem } from "../components/ProductCreated/ProductItem";
import { OrderList } from "../components/OrderProduct/OrderList";
import StickyHeadTable from "../components/TableStock";
import UserManager from "../pages/user-manager";
import { Contact } from "../pages/Contact";
import { Privacy } from "../pages/Privacy";
import { NavBar } from "../pages/NavBar";
import Footer from "../pages/Footer";
import AuthProvider  from "../contexts/auth-provider";
import PrivateRoute from "../components/User/PrivateRoute"

export const DashboardRoutes = () => {
    return (
        <>
        {/* <AuthProvider> */}
            <NavBar />
            <div>
                
                        <Switch>
                            
                                <Route exact path="/product"    component={ ProductItem } />
                                <Route exact path="/formproduct"component={ FormCreateProduct } />
                                <Route exact path="/order"      component={ OrderList } />
                                <Route exact path="/stock"      component={ StickyHeadTable } />
                                <Route exact path="/userAdmin"  component={ UserManager } />
                                <Route exact path="/contact"    component={ Contact } />
                                <Route exact path="/privacy"    component={ Privacy  } />
                            

                                <Redirect to="/stock" /> 
                        </Switch>
                
            </div>
            <Footer />    
            {/* </AuthProvider> */}
        </>
    )
}
