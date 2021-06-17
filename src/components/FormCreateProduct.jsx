import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { Button } from "@material-ui/core";


const currencies = [
  {
    value: "Ordenador",
    label: "Ordenador",
  },
  {
    value: "Consolas",
    label: "Consolas",
  },
  {
    value: "Teléfono",
    label: "Teléfono",
  },
  {
    value: "Discos",
    label: "Discos",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "40ch",
    },
  },
  box: {
    backgroundColor: "#F8F9F9",
  },
}));



export default function MultilineTextFields() {
  const classes = useStyles();


  const [currency, setCurrency] = useState();
  const handleChange = (event) => {
    setCurrency(event.target.value);
  };





  return (
    <div className={classes.box}>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-select-currency"
          select
          label="Categoria"
          value={currency}
          onChange={handleChange}
          helperText="Por favor, seleccione una categoría para el producto"
          variant="outlined"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <br />
        <TextField
          id="outlined-basic"
          label="Nombre Producto"
          type="text"
          variant="outlined"
        />
        <br />
        <TextField id="outlined-basic" label="Modelo" variant="outlined" />
        <br />
        <TextField id="outlined-basic" label="Marca" variant="outlined" />
        <br />
        <TextField id="outlined-basic" label="Proveedor" variant="outlined" />
        <br />
        <TextField
          id="outlined-basic"
          label="Precio"
          type="number"
          variant="outlined"
        />
        <br />
        
        <TextField
          id="outlined-basic"
          label="Stock Mínimo"
          type="number"
          variant="outlined"
        />
      </form>

      <Button variant="contained" color="primary">

        Guardar
      </Button>
    </div>
  );
}
