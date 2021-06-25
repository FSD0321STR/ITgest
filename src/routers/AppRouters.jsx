import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

import { FormCreateProduct } from '../components/FormCreateProduct/FormCreateProduct'
import { ProductCreated } from '../components/ProductCreated/ProductCreated'


export const AppRouters = () => {
    return (
        <Router>
            <>

                <Switch>
                    

                    <Route exact path="/createNewProduct" component={ FormCreateProduct } />

                    <Route exact path="/productCreated" component={ ProductCreated } />

                    
                </Switch>
                
            </>
      </Router>
    );
}
