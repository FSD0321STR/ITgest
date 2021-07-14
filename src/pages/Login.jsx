import React, { useState } from "react";
import { TextField, makeStyles, Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import api from "../helpers/api";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    gridTemplateColumns: "50% 50%",
    height: "100vh",
  },
  alert: {
    display: "flex",
    flexDirection: "column",
    color: "red",
  },
  formwraper: {
    display: "flex",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  form: {
    display: "flex",
    margin: "5%",
  },
  boxForm: {
    backgroundColor: "#FFFFF",
    borderRadius: "5px",
    width: "90%",
    boxShadow: "2px 2px 15px #8888",
    display: "flex",
    // flexDirection: "column",
  },
  item: {
  
    width: "90%",
    marginRight: "10px",
  },
  button: {
    width: "25%",
    height:"55px",
    display: "flex",
    alignContent: "center",
  },
  Login__info: {
    width: "90%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
  },

  Title: {
    fontFamily: "inherit",
    fontWeight: "700px",
  },

  rightimage: {
    backgroundImage:
      "url(https://wat-files.s3.amazonaws.com/00/108/1625850154608Disosinttul.png)",
  },
}));

function Login() {
  const classes = useStyles();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const loginUser = async (data) => {
    const user = { email: data.email, password: data.password };
    console.log(user);
    await api.login(user);
  };

  return (
    <div className={classes.root}>
      <div className={classes.rightimage}></div>
      <div className={classes.formwraper}>
        <div className={classes.Login__info}>
          <h1 className={classes.Title}>Bienvenido a</h1>
          <h2>IT Gest</h2>
          <div></div>
        </div>
        <br />
        <div className={classes.boxForm}>
          <form onSubmit={handleSubmit(loginUser)} className={classes.form}>
            <div className={classes.alert}>
              <TextField
                className={classes.item}
                id="emailImput"
                label="Email"
                name="email"
                {...register("email", {
                  required: "Introduce un email",
                  pattern: /^[a-z0-9._%+-]+@[a-z0-9,-]+\.[a-z]{2,4}$/,
                })}
                type="email"
                variant="outlined"
                error={errors.email}
              />
              <ErrorMessage
                errors={errors}
                name="email"
                render={({ message }) => <p>{message}</p>}
              />
            </div>
            <div className={classes.alert}>
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
                render={({ message }) => <p>{message}</p>}
              />
            </div>
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
    </div>
  );
}
export default Login;
