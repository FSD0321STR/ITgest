import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField } from "@material-ui/core";
import Alert from '@material-ui/lab/Alert';









const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(1),
        width: "100%",

        


    },
    box: {
      backgroundColor: "#F6F9FF",
      padding: "30px",
      borderRadius: "10px",
      margin: "30px",
      height: "100%",
      width: "50%",
      position: "float",

    },
    inpt: {
      margin: "5px",
    },
    alert: {
      width: '90%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
      left: "1%",
      position: "relative",
    },
  }));
  
  
  



export const FormCreateProduct = ( { onSubmit, children } ) => {

    const classes = useStyles();
    const [error, setError] = useState("");
    // const [selected, setSelected] = useState("");
    const [visible, setVisible] = useState(false);
    const [product, setProduct] = useState("");
    const [model, setModel] = useState("");
    const [brand, setBrand] = useState("");
    const [supplier, setSupplier] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");


    
    const view = () => {
        setVisible(!visible);
    };
    
    const handleProduct = (e) => {
      const newText = e.target.value;
      setProduct(newText);
      if (error && newText) {
        setError("");
      }

    };

    const handleModel= (e) => {
      const newText = e.target.value;
      setModel(newText);
      if (error && newText) {
        setError("");
      }

    };

    const handleBrand= (e) => {
      const newText = e.target.value;
      setBrand(newText);
      if (error && newText) {
        setError("");
      }

    };

    const handleSupplier= (e) => {
      const newText = e.target.value;
      setSupplier(newText);
      if (error && newText) {
        setError("");
      }

    };

    const handlePrice= (e) => {
      const newText = e.target.value;
      setPrice(newText);
      if (error && newText) {
        setError("");
      }

    };

    const handleStock= (e) => {
      const newText = e.target.value;
      setStock(newText);
      if (error && newText) {
        setError("");
      }

    };
    
    


    // const handleChange = selectedOption => {
    //   setSelected(selectedOption)
    // };

    const handleSubmit = (event) => {
      event.preventDefault();
      if (!product) {
        setError(`Te faltaria agregar este campo`);

      } else {
        onSubmit({
          product,
          board: selected.value,
        });
        setProduct("");
        setError("");
      }
      ref.current.focus();
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
        <form onSubmit={handleSubmit}>
          <div className={classes.box}>
            
            <TextField 
            id="nameProduct"
            value={ product }
            onChange={ handleProduct }
            className={ classes.root } 
            variant="outlined" 
            label="Nombre Producto" 
            />
            {error && <Alert severity="error">{error}</Alert>}
            {children}

            <br />

            <TextField 
            value={ model }
            onChange= { handleModel }
            className={ classes.root } 
            label="Modelo" 
            variant="outlined" 
            />
            {error && <Alert severity="error">{error}</Alert>}
            {children}

            <br />

            <TextField 
            value={ brand }
            onChange= { handleBrand }
            className={classes.root} 
            label="Marca" 
            variant="outlined" />
            {error && <Alert severity="error">{error}</Alert>}
            {children}

            <br />

            <TextField 
            value={ supplier }
            onChange= { handleSupplier }
            className={classes.root} 
            label="Proveedor" 
            variant="outlined" 
            />
            {error && <Alert severity="error">{error}</Alert>}
            {children}

            <br />

            <TextField
              value={ price }
              onChange={ handlePrice }
              className={classes.root}
              id="outlined-basic"
              label="Precio"
              type="number"
              variant="outlined"/>
            <br />
            {error && <Alert severity="error">{error}</Alert>}
            {children}

            <TextField className={ classes.root }
              value={ stock }
              onChange={ handleStock }
              id="outlined-basic"
              label="Stock Mínimo"
              type="number"
              variant="outlined"
            />
            {error && <Alert severity="error">{error}</Alert>}
            {children}

            <br />

            <Button 
              type="submit"
              variant="contained" 
              color="primary"
              
              > 
              Guardar nuevo producto 
            </Button>
            
            </div>
        </form>
      ) : null}
      
    </>
  );
};

