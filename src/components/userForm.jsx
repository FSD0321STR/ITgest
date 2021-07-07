import React, { useState } from "react";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  makeStyles,
} from "@material-ui/core";
import roles from "../contexts/roles";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import useAuth from "../hooks/useAuth";
import { PinDropSharp } from "@material-ui/icons";
import { useEffect } from "react";
import api from "../helpers/api";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    marginRight: "20px",
  },
  item: {
    marginTop: "20px",
  },
}));

function userForm(user) {
  const classes = useStyles();
  const { registerUser } = useAuth();
  const [role, setRole] = useState(roles.R1);
  const [editingUser, setEditingUser] = useState({
    name: "",
    surname: "",
    email: "",
    role: "",
    password: "",
  });

  useEffect(() => {
    setEditingUser(user);
  }, [user]);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  const createUser = async (data) => {
    setEditingUser({
      email: data.email,
      password: data.password,
      name: data.name,
      surname: data.surname,
      role: role,
    });
    if (!editingUser.id) {
      await registerUser(editingUser);
    } else {
      await api.updateUser(editingUser);
    }
    console.log(editingUser);
  };

  return (
    <form
      onSubmit={handleSubmit(createUser)}
      className={classes.form}
      noValidate
      autoComplete="off"
    >
      <TextField
        className={classes.item}
        {...register("name", { required: true })}
        label="Nombre"
        type="text"
        name="name"
        value={editingUser.name}
        variant="outlined"
        error={errors.name}
      />
      <TextField
        className={classes.item}
        {...register("surname", { required: true })}
        label="Apellidos"
        type="text"
        value={editingUser.surname}
        name="surname"
        variant="outlined"
        error={errors.surname}
      />
      <TextField
        className={classes.item}
        id="emailImput"
        label="Email"
        value={editingUser.email}
        name="email"
        {...register("email", {
          required: "Email no valido",
          minLength: /^[a-z0-9._%+-]+@[a-z0-9,-]+\.[a-z]{2,4}$/,
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
        value={editingUser.password}
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

      <Select
        className={classes.item}
        labelId="demo-simple-select-label"
        id="roleImput"
        name="role"
        variant="outlined"
        label="Rol"
        value={editingUser.rol}
        onChange={handleChange}
      >
        {Object.values(roles).map((rol) => (
          <MenuItem key={rol} value={rol}>
            {rol}
          </MenuItem>
        ))}
      </Select>
      <Button
        type="submit"
        className={classes.item}
        variant="contained"
        color="primary"
      >
        Guardar Usuario
      </Button>
    </form>
  );
}

export default userForm;
