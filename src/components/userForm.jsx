import React, { useState } from "react";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  makeStyles,
} from "@material-ui/core";
import roles from "../contexts/roles";
import UserList from "./userList";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

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

function userForm() {
  const classes = useStyles();
  const [role, setRole] = useState(roles.R1);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  const createUser = (data) => {
    const newUser = {
      email: data.email,
      password: data.password,
      name: data.name,
      surname: data.surname,
      role: role,
    };
    console.log(newUser);
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
        variant="outlined"
        error={errors.name}
      />
      <TextField
        className={classes.item}
        {...register("surname", { required: true })}
        label="Apellidos"
        type="text"
        name="surname"
        variant="outlined"
        error={errors.surname}
      />
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
        render={({ message }) => <p>{message}</p>}
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
        render={({ message }) => <p>{message}</p>}
      />

      <Select
        className={classes.item}
        labelId="demo-simple-select-label"
        id="roleImput"
        name="role"
        variant="outlined"
        label="Rol"
        value={role}
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
        Crear Usuario
      </Button>
    </form>
  );
}

export default userForm;
