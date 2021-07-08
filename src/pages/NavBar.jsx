import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
  

export const NavBar = () => {
    return (
        <div>
            <Button 
            variant="outlined" 
            color="primary"
            > 
                <Link style={{textDecoration:"none"}} to="/product"> Producto </Link>
            </Button>

            <Button variant="outlined" color="primary"> 
                <Link style={{textDecoration:"none"}}  to="/order"> Pedidos </Link>
            </Button>
        </div>
    )
}
