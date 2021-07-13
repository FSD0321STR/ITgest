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
    navLog: {
        backgroundColor: "#FFFFF",
        color: 'white',
        height: 30,
        display: "flex",
        justifyContent: "flex-end",
        padding:"5px",
        boxShadow: "2px 2px 8px #8888",
        marginBlockEnd:"20px"
    

        
        
    },
    btn: {
        display: "flex",
        justifyContent: "center",
        padding:"20px",

    },
    btnUserAdmin:{
        display: "flex",
        justifyContent: "center",
        marginLeft:"5px",


    },
    link: {
        textDecoration:"none",
    },

  }));

export const NavBar = () => {
    const classes = useStyles();
    return (
    <div>
        
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
        <div className={classes.navLog}>
            <div className={classes.btnUserAdmin} >
                <Button 
                    color="primary"
                    variant="outlined"
                > 
                    <Link 
                        style={{textDecoration:"none", color:"#3f51b5"}}  
                        to="/userAdmin"
                    > Administrador de usuario
                    </Link>
                </Button>
            </div>
            <div className={classes.btnUserAdmin} >
                <Button 
                    color="secondary"
                    variant="outlined"
                > 
                    <Link 
                        style={{textDecoration:"none", color:"#f50057"}}  
                        to="/login"
                    > LogOut
                    </Link>
                </Button>
            </div>
        </div>
    </div>
    )
}
