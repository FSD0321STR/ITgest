import React, { useState } from "react";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  makeStyles,
} from "@material-ui/core";
import roles from "../../contexts/roles";
import { useForm, Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import useAuth from "../../hooks/useAuth";
import { ContactSupportOutlined, PinDropSharp } from "@material-ui/icons";
import { useEffect } from "react";
import api from "../../helpers/api";
import "./styles.css";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
  },
  item: {
    margin: "10px",
  },

  boxForm: {
    backgroundColor: "#FFFFFF",
    padding: "20px",
    borderRadius: "10px",
    margin: "30px",
    maxHeight: "600px",
    boxShadow: "2px 2px 15px #8888",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  btn: {
    margin: theme.spacing(1),
    width: "98%",
    height: "50px",
    display: "flex",
    justifyContent: "center",
  },
  resetBtn: {
    margin: theme.spacing(1),
    width: "98%",
    height: "50px",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#F75A6D",
  },

  alert: {
    marginLeft: "10px",
  },
}));

function UserForm({ user, setUser }) {
  const classes = useStyles();
  const { registerUser } = useAuth();

  const {
    register,
    control,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      role: "Administrador",
      password: "",
    },
  });

  useEffect(() => {
    reset(user);
  }, [user]);
  console.log(user);
  const handleChange = (event) => {
    setRole(event.target.value);
  };

  const onSubmit = async (data) => {
    console.log(data);
    const editingUser = {
      email: data.email,
      password: data.password,
      name: data.name,
      surname: data.surname,
      role: data.role,
    };
    console.log(editingUser);
    if (!editingUser._id) {
      await api.register(editingUser).then();
    } else {
      await api.updateUser(editingUser).then();
    }
    window.location.reload(false);
  };

  return (
    <div className={classes.boxForm}>
      <h2>
        Formulario de <strong>usuario</strong>
      </h2>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
          defaultValue=""
          rules={{
            required: true,
          }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Nombre"
              className={classes.item}
              variant="outlined"
              error={errors.name}
            />
          )}
        />
        <Controller
          name="surname"
          control={control}
          defaultValue=""
          rules={{
            required: true,
          }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Apellido"
              className={classes.item}
              variant="outlined"
              error={errors.surname}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          rules={{
            required: "Email no valido",
            pattern: /^\S+@\S+$/i,
          }}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Email"
              className={classes.item}
              variant="outlined"
              error={errors.email}
              type="email"
            />
          )}
        />
        <ErrorMessage
          errors={errors}
          name="email"
          render={({ message }) => <p>{message}</p>}
        />
        <Controller
          name="password"
          control={control}
          rules={{
            required: "La contrase??a debe terner al menos 6 caracteres",
            minLength: 6,
          }}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Contrase??a"
              variant="filled"
              className={classes.item}
              error={errors.password}
              type="password"
            />
          )}
        />
        <ErrorMessage
          errors={errors}
          name="password"
          render={({ message }) => <p>{message}</p>}
        />
        <Controller
          rules={{
            required: true,
          }}
          render={({ field }) => (
            <Select {...field} className={classes.item}>
              <MenuItem value={"Administrador"}>Administrador</MenuItem>
              <MenuItem value={"Usuario"}>Usuario</MenuItem>
            </Select>
          )}
          name="role"
          control={control}
        />

        <div>
          <Button
            type="submit"
            className={classes.btn}
            variant="contained"
            color="primary"
          >
            Guardar Usuario
          </Button>
          <Button
            onClick={() => {
              reset({
                name: "",
                surname: "",
                email: "",
                password: "",
                role: "Administrador",
              });
            }}
            className={classes.resetBtn}
            variant="contained"
            color="primary"
          >
            Cancelar
          </Button>
        </div>
      </form>
    </div>
  );
}

export default UserForm;
