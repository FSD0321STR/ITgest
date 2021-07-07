import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField } from "@material-ui/core";
// import { generateId } from "../../utils/string";
// import Alert from '@material-ui/lab/Alert';
// import useLocalStorage from "../../hooks/use-local-storage";
// import getCategory  from '../../helpers/api';
import axios from "axios";
// import postForm from '../../helpers/api'
import { useForm } from "../../hooks/useForm";
import api from '../../helpers/api';









const useStyles = makeStyles((theme) => ({
    root: {
        
        margin: theme.spacing(0.8),
        width: "98%",
        


    },
    box: {
      
      backgroundColor: "#FFFFFF",
      padding: "30px",
      borderRadius: "10px",
      margin: "30px",
      height: "100%",
      width: "30%",
      position: "float",
      boxShadow: "2px 2px 15px #8888",
  


    },
    inpt: {
      margin: theme.spacing(1),
      width: "100%",
        
    },
    alert: {
      width: '90%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
      // left: "1%",
      // position: "relative",
    },
    btn:{
      margin: theme.spacing(1),
      width: "98%",
      


  },
  }));
  
  
  



export const FormCreateProduct = ( {onSubmit} ) => {

    const classes = useStyles();
   
    const [error, setError] = useState("");
    const [options, setOptions ] = useState([]);
    // const [selected, setSelected] = useState("");
    const [visible, setVisible] = useState(false);
    
    const ref = useRef();

  

 
    const [ formValues, handleInputChange ] = useForm({
        category: '',
        model: '',
        brand: '',
        supplier: '',
        price: '',
        stock: ''
    });


    const { category, model, brand, supplier, price, stock } = formValues;

 



    const view = () => {
        setVisible(!visible);
    };
    const registered = {
      category,
      model,
      brand,
      supplier,
      price,
      stock,
    }

 

    const handleSubmit = (event) => {
      event.preventDefault();
      
      console.log(formValues)
   
    };

  return (
    <>
      <Button 
      variant="contained" 
      color="primary" 
      onClick={view}
      >
        Crear Nuevo Producto
      </Button>

      <br />
 
      
      <br />

      {visible ? (
        <form 
        onSubmit={ handleSubmit }
        >
          <div 
          className={ classes.box }
          >
            
            <TextField 
            // select={ listCategory }
            type="text"
            name="category"
            autoComplete="off"
            onChange={ handleInputChange }
            className={ classes.root } 
            variant="outlined" 
            label="Categorias" 
            value={ category }
            placeholder="Teléfono"
            
            />
            {/* {error && <Alert severity="error">{error}</Alert>}
            {children} */}

            <br />



            <TextField 
            autoComplete="off"
            name="brand"
            value={ brand }
            onChange= { handleInputChange }
            className={classes.root} 
            label="Marca" 
            variant="outlined" 
            placeholder="Iphone"
            />
            
            {/* {error && <Alert severity="error">{error}</Alert>}
            {children} */}

            <br />
            
            <TextField 
            autoComplete="off"
            type="text"
            name="model"
            value={ model }
            onChange= { handleInputChange  }
            className={ classes.root } 
            label="Modelo" 
            variant="outlined" 
            placeholder="12 Pro"
            />
            {/* {error && <Alert severity="error">{error}</Alert>}
            {children} */}

            <br />

            <TextField 
            autoComplete="off"
            value={ supplier }
            name="supplier"
            onChange= { handleInputChange }
            className={classes.root} 
            label="Proveedor" 
            variant="outlined" 
            placeholder="Apple S.L."
            />
            {/* {error && <Alert severity="error">{error}</Alert>}
            {children} */}

            <br />

            <TextField
              autoComplete="off"
              value={ price }
              name="price"
              onChange={ handleInputChange }
              className={classes.root}
              id="outlined-basic"
              label="Precio"
              type="number"
              variant="outlined"
              placeholder="1200 €"
              />
            <br />
            {/* {error && <Alert severity="error">{error}</Alert>}
            {children} */}

            <TextField 
              autoComplete="off"
              className={ classes.root }
              value={ stock }
              name="stock"
              onChange={ handleInputChange }
              id="outlined-basic"
              label="Stock Mínimo"
              type="number"
              variant="outlined"
              placeholder="5 Unid."
            />
            {/* {error && <Alert severity="error">{error}</Alert>}
            {children} */}

            <br />

            <Button 
              className={ classes.btn }
              type="submit"
              variant="contained" 
              color="primary"
              > 
              Guardar nuevo producto 
            </Button>

            <Button  
              className={ classes.btn }
              // type="remove"
              variant="contained" 
              color="secondary"
              // onClick={ handleRemove }
              > 
              Borrar
            </Button>
            

            

            
            </div>
            
        </form>
      ) : null}
      
        
      
    </>
  );
};

