import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField } from "@material-ui/core";
// import { generateId } from "../../utils/string";
// import Alert from '@material-ui/lab/Alert';
// import useLocalStorage from "../../hooks/use-local-storage";
// import getCategory  from '../../helpers/api';
import axios from "axios";
import getForm from "../../helpers/api";
import { useForm, Controller } from "react-hook-form";
import api from "../../helpers/api";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(0.8),
    width: "70%",
    display: "flex",
    justifyContent: "center",
  },
  boxCreatNewProd: {
    borderRadius: "5px",
    boxShadow: "2px 2px 8px #8888",
    margin: "35px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    padding: "20px",
  },

  boxForm: {
    backgroundColor: "#FFFFFF",
    padding: "20px",
    borderRadius: "10px",
    margin: "30px",
    boxShadow: "2px 2px 15px #8888",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  // inpt: {
  //   margin: theme.spacing(1),
  //   width: "100%",
  //   display: "flex",
  //   justifyContent: "center",

  // },
  alert: {
    width: "90%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
    // left: "1%",
    // position: "relative",
  },
  btn: {
    margin: theme.spacing(1),
    width: "98%",
    height: "50px",
    display: "flex",
    justifyContent: "center",
  },
  btnCreatNewProd: {
    display: "flex",
    justifyContent: "center",
    height: "50px",
    width: "90%",
  },
  h3: {
    display: "flex",
    justifyContent: "center",
    justifyItems: "center",
  },
  screen: {
    minHeight: "80vh",
  },
}));

export const FormCreateProduct = () => {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState("");

  const [error, setError] = useState("");
  const [options, setOptions] = useState([]);
  // const [selected, setSelected] = useState("");
  const [visible, setVisible] = useState(false);

  const ref = useRef();

  const {
    register,
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      category: "",
      model: "",
      brand: "",
      supplier: "",
      price: "",
      stock: "",
    },
  });

  // const { formValues, handleInputChange, handleSubmit } = useForm({
  //   category: "",
  //   model: "",
  //   brand: "",
  //   supplier: "",
  //   price: "",
  //   stock: "",
  // });

  // const { category, model, brand, supplier, price, stock } = formValues;

  // console.log(formValues);

  const view = () => {
    setVisible(!visible);
  };

  const onSubmit = async (data) => {
    console.log(data);
    const newProduct = {
      category: data.category,
      model: data.model,
      brand: data.brand,
      supplier: data.supplier,
      price: data.price,
      stock: data.stock,
    };
    console.log(newProduct);
    await api.postItem(newProduct).then();
    reset({
      category: "",
      model: "",
      brand: "",
      supplier: "",
      price: "",
      stock: "",
    });
  };

  // useEffect(async () => {
  //   await api.getForm().then(formValues);
  // }, []);

  // console.log(getForm);

  return (
    <div className={classes.screen}>
      <div className={classes.boxCreatNewProd} variant="outlined">
        {!visible ? (
          <Button
            className={classes.btnCreatNewProd}
            variant="contained"
            color="primary"
            onClick={view}
          >
            Crear Nuevo Producto
          </Button>
        ) : null}

        {visible ? (
          <form onSubmit={handleSubmit(onSubmit)}>
            <br />
            <h3 className={classes.h3}>
              !Hola Soufian!, rellena el formulario para crear un nuevo producto
            </h3>
            <hr />

            <div className={classes.boxForm}>
              <Controller
                name="category"
                control={control}
                defaultValue=""
                rules={{
                  required: true,
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Categorias"
                    variant="outlined"
                    error={errors.category}
                    placeholder="Teléfono"
                  />
                )}
              />

              <br />

              <Controller
                name="brand"
                control={control}
                defaultValue=""
                rules={{
                  required: true,
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Marca"
                    variant="outlined"
                    error={errors.brand}
                    placeholder="Iphone"
                  />
                )}
              />

              <br />

              <Controller
                name="model"
                control={control}
                defaultValue=""
                rules={{
                  required: true,
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Modelo"
                    variant="outlined"
                    error={errors.model}
                    placeholder="12 Pro"
                  />
                )}
              />

              <br />

              <Controller
                name="supplier"
                control={control}
                defaultValue=""
                rules={{
                  required: true,
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Supplier"
                    variant="outlined"
                    error={errors.supplier}
                    placeholder="Apple S.L."
                  />
                )}
              />

              <br />

              <Controller
                name="price"
                control={control}
                defaultValue=""
                rules={{
                  required: true,
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Precio"
                    type="number"
                    variant="outlined"
                    error={errors.price}
                    placeholder="1200 €"
                  />
                )}
              />
              <br />

              <Controller
                name="stock"
                control={control}
                defaultValue=""
                rules={{
                  required: true,
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Stock Mínimo"
                    type="number"
                    variant="outlined"
                    error={errors.stock}
                    placeholder="5 Unid."
                  />
                )}
              />

              <br />

              <Button
                className={classes.btn}
                type="submit"
                variant="contained"
                color="primary"
              >
                Guardar nuevo producto
              </Button>

              <Button
                className={classes.btn}
                // type="remove"
                variant="contained"
                color="secondary"
                onClick={() => {
                  reset({
                    category: "",
                    model: "",
                    brand: "",
                    supplier: "",
                    price: "",
                    stock: "",
                  });
                }}
              >
                Cancelar
              </Button>
            </div>
          </form>
        ) : null}
      </div>
    </div>
  );
};
