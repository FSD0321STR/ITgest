import React, { useMemo, useState } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { useParams, Redirect } from 'react-router-dom';
import { Button, TextField } from "@material-ui/core";
import ProductList from './productList';
import { useForm } from "../../hooks/useForm";
import axios from "axios";






const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(1),
        width: "55%",

    },
    boxOrder:{
        borderRadius: "5px",
        boxShadow: "2px 2px 10px #8888",
        height: "70px",
        width: "280px",
        position: "relative",
        left: "3%",
        top:"52px"
  
    },
    boxOrderAssign:{
        borderRadius: "5px",
        boxShadow: "2px 2px 10px #8888",
        height: "143px",
        width: "280px",
        position: "relative",
        left: "3%",
        top:"52px"
    },
    box: {

        backgroundColor: "#FAFBFC",
        height: "300px",
        width: "300px",
        borderRadius: "5px",
        boxShadow: "2px 2px 8px #8888",
        margin: "50px",
        // position: "relative",
    

    },
    btnPedir: {
        position: "relative",
        left: "1%",
        margin: "5px",
    },
    btnAsignar: {
        position: "relative",
        left: "12%",
        margin: "7px",
        
    },
    Img: {
        backgroundColor: "#E8E8E8",
        height: "235px",
        width: "288px",
        position: "relative",
        top:"2%",
        left: "2%",
        paddingTop:"10px",
        marginBlockEnd:"5px",
        borderRadius: "5px",
        


    },
    txt: {
        backgroundColor: "#F8FBFF",
        height: "auto",
        width: "160px",
        position: "relative",
        top: 130,
        margin: "0px",
        left: "3%",
        borderRadius: "5px",
        marginTop:"3px",
        paddingLeft:"10px",
        boxShadow: "2px 2px 8px #8888",


    },
    btnBoxOrder:{
        position: "relative",
        left: "3%",
        margin: "5px",
        top:"6px",
        height:"50px"
    },
    btnBoxOrderAssign:{
        position: "relative",
        left: "0%",
        margin: "5px",
        top:"-30px",
        height:"50px",
    },
    btnBoxOrderCancel:{
        position: "relative",
        left: "30%",


    },
    genBox:{
        borderRadius:"5px",
        boxShadow: "2px 2px 8px #8888",
        position:"relative",
        margin:"35px",
        padding:"20px",
        paddingBlockEnd:"200px"
        
    }

  }));
  

export const ProductItem = () => {
    
        const classes = useStyles();
        const [order, setOrder] = useState();
        const [assign, setAssign] = useState();

        const inputAsign = () =>{
            setAssign(!assign);
        }

        const inputOrder = () =>{
            setOrder(!order);
        }




        const [ formValues, handleInputChange ] = useForm({
            category: '',
            model: '',
            brand: '',
            supplier: '',
            price: '',
            stock: ''
        });
    
    
        const { category, model, brand, supplier, price, stock } = formValues;
    
        

        const getAll =  axios.get('http://localhost:8000/formproduct', {

            data:{
              category: formValues.category,
              model: formValues.model,
              brand: formValues.brand,
              supplier: formValues.supplier,
              price: formValues.price,
              stock: formValues.stock
            },

            })
            .then(response => {
              console.log(response);
            })
            .catch(error => {
            //   console.log(error);
            });

        
            console.log(getAll)
        



    
        return (
           <div className={classes.genBox}>
                <div className={classes.box}>

                    <div className={classes.Img}>
                        {/* <img src={ `../../img/${ getProduct.product.id }.jpg` } className="card-img" alt={ getProduct.product.id } /> */}

                        <div > 

                            <p className= {classes.txt}>Categoria:  <b>Teléfono</b> </p>
                            <p className= {classes.txt}>Marca:      <b>Iphone</b></p>
                            <p className= {classes.txt}>Modelo:     <b>12 Pro</b></p>
                            <p  className= {classes.txt}>Stock:      <b style={{color: "#47A532"}}>5 Unid.</b></p>
            
                        </div>                    
                    </div>
            
                    {!order && !assign ? (
                        <div >
                            <Button 

                                className={classes.btnPedir} 
                                variant="contained"
                                color="secondary"
                                onClick={inputOrder}
                                >Pedir
                            </Button>


                            <Button 
                                className={classes.btnAsignar} 
                                variant="contained" 
                                color="primary"
                                onClick={inputAsign}
                                >Asignar Operario 
                            </Button>
                        </div>
                        ):null}


                    {/* Solicitar un pedido por falta de Stock */}
                    {order ?(
                        <div className={classes.boxOrder}>
                            <TextField 
                                autoComplete="off"
                                className={ classes.root }
                                // value={ }
                                name="stock"
                                // onChange={}
                                id="outlined-basic"
                                label="Cantidad"
                                type="number"
                                variant="outlined"
                                placeholder="5 Unid."
                            />
                            <Button 
                            className={classes.btnBoxOrder} 
                            variant="contained" 
                            color="primary"
                            >Pedir
                            </Button>

                            <Button 
                            onClick={inputOrder}
                            className={classes.btnBoxOrderCancel} 
                            variant="contained" 
                            color="secondary"
                            >Cancelar
                            </Button>

                        </div>
                    ):null}

                    {/* Asignación de producto a un operario */}
                    {assign ?(
                        <div className={classes.boxOrderAssign}>
                            <TextField 
                                autoComplete="off"
                                className={ classes.root }
                                // value={ }
                                name="name"
                                // onChange={ }
                                id="outlined-basic"
                                label="Usuario"
                                type="text"
                                variant="outlined"
                                placeholder="Soufian Y.A."
                            />
                            <TextField 
                                autoComplete="off"
                                className={ classes.root }
                                // value={ }
                                name="unit"
                                // onChange={ }
                                id="outlined-basic"
                                label="Unidades"
                                type="number"
                                variant="outlined"
                                placeholder="5 Unid."
                            />
                            <Button 
                            className={classes.btnBoxOrderAssign} 
                            variant="contained" 
                            color="primary"
                            >Asignar
                            </Button>

                            <Button 
                            onClick={inputAsign}
                            className={classes.btnBoxOrderCancel} 
                            variant="contained" 
                            color="secondary"
                            >Cancelar
                            </Button>

                        </div>
                    ):null}
                </div>
            </div> 
        )
    }
