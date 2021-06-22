import React, { useState } from "react";
import { TextField, makeStyles, Button } from "@material-ui/core";
import { useForm } from "react-hook-form";

function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register } = useForm();

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
      marginTop: "20px",
    },
    rightimage: {
      backgroundImage: "url(https://source.unsplash.com/random)",
    },
  }));

  const classes = useStyles();

  function handleSubmit(event) {
    event.preventDefault();
    const user = { email, password };
    console.log(user);
  }

  return (
    <div className={classes.root}>
      <div className={classes.backgroundImage}></div>
      <div className={classes.formwraper}>
        <form onSubmit={handleSubmit} className={classes.form}>
          <TextField
            className={classes.item}
            id="emailImput"
            {...register("email", { required: true })}
            label="Email"
            type="email"
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            className={classes.item}
            {...register("password", {
              required: true,
              minLength: 6,
            })}
            label="Contraseña"
            type="password"
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            className={classes.item}
            variant="contained"
            color="primary"
          >
            Crear Usuario
          </Button>
        </form>
      </div>
    </div>
  );
}
export default login;
