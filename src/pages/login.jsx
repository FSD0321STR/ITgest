import React, { useState } from "react";
import { TextField, makeStyles, Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    gridTemplateColumns: "50% 50%",
    marginTop: "20px",
    height: "100vh",
  },
  formwraper: {
    display: "flex",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    display: "flex",
  },
  item: {
    width: "40%",
    marginRight: "10px",
  },
  button: {
    width: "25%",
  },
  rightimage: {
    backgroundImage: "url(https://source.unsplash.com/random)",
  },
}));

function login() {
  const classes = useStyles();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  function getUser(data) {
    const user = { email: data.email, password: data.password };
    console.log(user);
  }

  return (
    <div className={classes.root}>
      <div className={classes.backgroundImage}></div>
      <div className={classes.formwraper}>
        <form onSubmit={handleSubmit(getUser)} className={classes.form}>
          <TextField
            className={classes.item}
            id="emailImput"
            label="Email"
            name="email"
            {...register("email", {
              required: "Email no valido",
              pattern: /^[a-z0-9._%+-]+@[a-z0-9,-]+\.[a-z]{2,4}$/,
            })}
            type="email"
            variant="outlined"
            error={errors.email}
          />

          <ErrorMessage
            errors={errors}
            name="email"
            render={({ message }) => <p color="red">{message}</p>}
          />

          <TextField
            className={classes.item}
            {...register("password", {
              required: "La contraseña debe terner al menos 6 caracteres",
              minLength: 6,
            })}
            label="Contraseña"
            type="password"
            name="password"
            variant="outlined"
            error={errors.password}
          />
          <ErrorMessage
            errors={errors}
            name="password"
            render={({ message }) => <p color="red">{message}</p>}
          />
          <Button
            type="submit"
            className={classes.button}
            variant="contained"
            color="primary"
          >
            Acceder
          </Button>
        </form>
      </div>
    </div>
  );
}
export default login;
