import React, { useState } from "react";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  makeStyles,
  FormHelperText,
  Grid,
} from "@material-ui/core";
import roles from "../contexts/roles";
import UserList from "../components/UserList";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    gridTemplateColumns: "50% 50%",
    marginTop: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    marginRight: "20px",
  },
  item: {
    marginTop: "20px",
  },
}));

function userManager() {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(roles.R1);
  const [error, setError] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  function emailValidaton(email) {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log(email);
    console.log(re.test(email));
    if (re.test(email)) {
      setMail(email);
    } else {
    }
  }

  function onSubmit(event) {
    const newUser = { name, surname, email, password, role };
    console.log(newUser);
  }

  return (
    <div className={classes.root}>
      <div>
        <UserList />
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={classes.form}
        noValidate
        autoComplete="off"
      >
        <TextField
          className={classes.item}
          {...register("name", { required: true })}
          label="Nombre"
          type="text"
          variant="outlined"
          error={errors.name}
        />
        <TextField
          className={classes.item}
          {...register("surname", { required: true })}
          label="Apellidos"
          type="text"
          variant="outlined"
          onChange={(e) => setSurname(e.target.value)}
          error={errors.surname}
        />
        <TextField
          className={classes.item}
          id="emailImput"
          {...register("email", { required: true })}
          label="Email"
          type="text"
          variant="outlined"
          onChange={(e) => emailValidaton(e.target.value)}
          error={errors.email}
        />
        <TextField
          className={classes.item}
          {...register("password", {
            required: true,
            minLength: 6,
          })}
          label="Contraseña"
          type="text"
          variant="outlined"
          error={errors.password}
        />
        <Select
          className={classes.item}
          labelId="demo-simple-select-label"
          id="roleImput"
          variant="outlined"
          label="Rol"
          value={role}
          onChange={handleChange}
          helperText="Por favor, seleccione una categoría para el producto"
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
    </div>
  );
}

export default userManager;
