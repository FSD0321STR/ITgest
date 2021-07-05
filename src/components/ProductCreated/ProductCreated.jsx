import React, { useMemo } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { useParams, Redirect } from 'react-router-dom';
import { Button, TextField } from "@material-ui/core";
import ProductList from './productList';

// import { getProductById } from '../../selector/getProduct'
// import { product } from '../../data/dbCreateProduct';



const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(1),
        width: "100%",

    },
    box: {

        backgroundColor: "#FAFBFC",
        height: "300px",
        width: "300px",
        borderRadius: "5px",
        boxShadow: "2px 2px 8px #6666",
        margin: "50px",
        position: "relative",
    

    },
    btnPedir: {
        position: "relative",
        left: "1%",
        margin: "5px",
    },
    btnAsignar: {
        position: "relative",
        left: "12%",
        margin: "5px",
        
    },
    Img: {
        backgroundColor: "#E8E8E8",
        height: "250px",
        width: "300px",
        position: "relative",
        top:0,
        left: "0%",
        margin: "0px",
        borderRadius: "5px",


    },
    txt: {
        backgroundColor: "#F8FBFF",
        height: "110px",
        width: "300px",
        position: "relative",
        top: "50%",
   
        margin: "0px",
        borderRadius: "5px",


    },

  }));
  



export const ProductCreated = () => {

    // const { productId } = useParams();
    // const product = useMemo (() => getProductById( productId ), [ productId ]);
    const classes = useStyles();

    const getProduct = {
        product: {}
    };

    return (
        <div className={classes.box}>

            <div className={classes.Img}>
                <div className= {classes.txt}> 
                    <p>Producto: </p>
                    <p>Modelo:</p>
                    <p>Stock:</p>

                </div>                    
            </div>



            <div>
                <Button className={classes.btnPedir} variant="contained"color="secondary">Pedir</Button>
                <Button className={classes.btnAsignar} variant="contained" color="primary">Asignar Operario</Button>
            </div>
        </div>
    )
}
