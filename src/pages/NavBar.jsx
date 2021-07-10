import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
  


const useStyles = makeStyles(() => ({
    navBar: {
        backgroundColor: "#3f51b5",
        color: 'white',
        height: 60,
        display: "flex",
        justifyContent: "center",

        
    },
    btn: {
        display: "flex",
        justifyContent: "center",
        padding:"20px",
        
    
        
        // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        
    },
    link: {
        textDecoration:"none",
    },

  }));

export const NavBar = () => {
    const classes = useStyles();
    return (
        <div 
            className={classes.navBar}>
            <Button 
                className={classes.btn} 
                color="primary"
            > 
                <Link 
                    style={{textDecoration:"none", color:"white"}}  
                    to="/stock"
                > Stock 
                </Link>
            </Button>
            <Button 
                className={classes.btn} 
                color="primary"
            > 
                <Link 
                    style={{textDecoration:"none", color:"white"}}  
                    to="/order"
                    > Pedidos 
                </Link>
            </Button>
            <Button 
                className={classes.btn} 
                color="primary"
            > 
                <Link 
                    style={{textDecoration:"none", color:"white"}} 
                    to="/product" 
                > Producto </Link>
            </Button>
        </div>
    )
}
