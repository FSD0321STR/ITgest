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
import { PinDropSharp } from "@material-ui/icons";
import { useEffect } from "react";
import api from "../../helpers/api";
import "./styles.css";
import { red } from "@material-ui/core/colors";

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

function UserForm(user, formSubmit) {
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
      role: "Administrador",
      password: "",
    },
  });

  let editableUser = {
    name: "",
    surname: "",
    email: "",
    role: "Administrador",
    password: "",
  };

  useEffect(() => {
    reset(user);
  }, [user]);

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
      id: data.id,
    };
    console.log(editingUser);
    if (!editingUser._id) {
      await api.register(editingUser).then();
    } else {
      await api.updateUser(editingUser);
    }
    window.location.reload(false);
  };

  return (
    <div className={classes.boxForm}>
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
            required: "La contraseña debe terner al menos 6 caracteres",
            minLength: 6,
          }}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Contraseña"
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
                role: "",
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
