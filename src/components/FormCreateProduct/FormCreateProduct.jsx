import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField } from "@material-ui/core";
import "./StylesForm.css";









const useStyles = makeStyles((theme) => ({
<<<<<<< Updated upstream
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
  
=======
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
  btn: {
    margin: "5px",
  }
}));

>>>>>>> Stashed changes



export const FormCreateProduct = () => {

<<<<<<< Updated upstream
    const classes = useStyles();

    const [visible, setVisible] = useState(false);
    const view = () => {
        setVisible(!visible);
    };
=======
  const classes = useStyles();

  const [visible, setVisible] = useState(false);
  const view = () => {
    setVisible(!visible);
  };
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
              variant="outlined"/>
              <br />
=======
              variant="outlined" />
            <br />
>>>>>>> Stashed changes
            <TextField className={classes.root}
              id="outlined-basic"
              label="Stock Mínimo"
              type="number"
              variant="outlined"
            />
            <br />
            <Button variant="contained" color="primary"> Guardar nuevo producto </Button>

<<<<<<< Updated upstream
            </div>
=======
          </div>
>>>>>>> Stashed changes
        </form>
      ) : null}
    </>
  );
};
