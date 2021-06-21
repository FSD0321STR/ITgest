import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';


export const AppRouters = () => {
    return (
        <Router>
            <>

                <Switch>
                    <Route exact path="/login" component={ } />

                    <Route exact path="/" component={ } />
                </Switch>
                
            </>
      </Router>
    );
}
