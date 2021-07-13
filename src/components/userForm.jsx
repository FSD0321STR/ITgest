import React, { useState } from "react";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  makeStyles,
} from "@material-ui/core";
import roles from "../contexts/roles";
import { useForm, Controller } from "react-hook-form";
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
      role: "",
      password: "",
    },
  });

  useEffect(() => {
    reset(user);
  }, [user]);

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  const createUser = async (data) => {
    const editingUser = {
      email: data.email,
      password: data.password,
      name: data.name,
      surname: data.surname,
      role: role,
      id: data.id,
    };
    if (!editingUser.id) {
      await api.register(editingUser);
    } else {
      await api.updateUser(editingUser);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(createUser)}
      className={classes.form}
      noValidate
      autoComplete="off"
    >
      <Controller
        name="name"
        control={control}
        rules={{
          required: true,
        }}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            className={classes.item}
            label="Nombre"
            type="text"
            variant="outlined"
            error={errors.name}
          />
        )}
      />
      <Controller
        name="surname"
        control={control}
        rules={{
          required: true,
        }}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            className={classes.item}
            label="Apellidos"
            type="text"
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
            className={classes.item}
            label="Email"
            type="email"
            variant="outlined"
            error={errors.email}
          />
        )}
      />

      <ErrorMessage
        errors={errors}
        name="email"
        render={({ message }) => <p color="red">{message}</p>}
      />

      <Controller
        name="password"
        control={control}
        rules={{
          required: "La contraseña debe terner al menos 6 caracteres",
          minLength: 6,
        }}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="Contraseña"
            type="password"
            name="password"
            variant="outlined"
            className={classes.item}
            error={errors.password}
          />
        )}
      />
      <ErrorMessage
        errors={errors}
        name="password"
        render={({ message }) => <p color="red">{message}</p>}
      />
      <Controller
        name="role"
        control={control}
        rules={{
          required: true,
        }}
        defaultValue="Administrador"
        render={({ field }) => (
          <Select
            className={classes.item}
            labelId="demo-simple-select-label"
            id="roleImput"
            variant="outlined"
            label="Rol"
            onChange={handleChange}
          >
            {Object.values(roles).map((rol) => (
              <MenuItem key={rol} value={rol}>
                {rol}
              </MenuItem>
            ))}
          </Select>
        )}
      ></Controller>
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
