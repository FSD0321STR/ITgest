import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField } from "@material-ui/core";
import "./StylesForm.css";









const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(0),
        width: "100%",
        padding: "5px",
        


    },
    box: {
      backgroundColor: "#F6F9FF",
      padding: "30px",
      borderRadius: "10px",
      margin: "40px",
      height: "100%",
      width: "50%",
      position: "float",
      
      
      
    

    },
    inpt: {
      margin: "5px",
    }
  }));
  



export const FormCreateProduct = () => {

    const classes = useStyles();

    const [visible, setVisible] = useState(false);
    const view = () => {
        setVisible(!visible);
    };

  return (
    <>
      <Button variant="contained" color="primary" onClick={view}>
        Crear Nuevo Producto
      </Button>

      <br />
      <br />

      {visible ? (
        <form>
          <div className={classes.box}>
            <TextField className={classes.root} variant="outlined" label="Nombre Producto" />
            <br />
            <TextField className={classes.root} label="Modelo" variant="outlined" />
            <br />
            <TextField className={classes.root} label="Marca" variant="outlined" />
            <br />
            <TextField className={classes.root} label="Proveedor" variant="outlined" />
            <br />
            <TextField
              className={classes.root}
              id="outlined-basic"
              label="Precio"
              type="number"
              variant="outlined"/>
              <br />
            <TextField className={classes.root}
              id="outlined-basic"
              label="Stock Mínimo"
              type="number"
              variant="outlined"
            />
            <br />
            <Button variant="contained" color="primary"> Guardar nuevo producto </Button>

            </div>
        </form>
      ) : null}
    </>
  );
};
