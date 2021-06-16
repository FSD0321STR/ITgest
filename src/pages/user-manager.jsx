import React, { useState } from "react";
import { TextField, Button, Select, MenuItem, makeStyles, FormHelperText, Grid } from "@material-ui/core";
import roles from "../contexts/roles";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'grid',
        gridTemplateColumns: '50% 50%',
        marginTop: '20px'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        marginRight: '20px'
    },
    item: {
        marginTop: '20px' 
    },

}));


function userManager(){
    const classes = useStyles(); 
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [mail, setMail] = useState("");
    const [ password, setPassword] = useState("");
    const [role, setRole] = useState(roles.R1);
    const [validEmail, setvalidEmail] = useState(true)

    const handleChange = (event) => {
        setRole(event.target.value);
    };
// revisar
    function emailverification (email) {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        console.log(email)
        console.log(re.test(email))
        if ( re.test(email) ) {
          setMail(email)
        } else {
            setvalidEmail(false)
        };
    
    };


    function handleSubmit (event){
        const newUser = {
            name , surname, email, password, role
        }
        console.log(newUser);
    }

    const errorStyle = {
        color: 'red',
        border: 'solid red'
    }


    return(
        <div className={classes.root} >
            <div></div>
            <form onSubmit={handleSubmit} className= {classes.form} noValidate autoComplete="off" >
                <TextField className={classes.item} id="nameImput" label="Nombre" type="text" variant="outlined" onChange={(e)=>setName(event.target.value)} />
                <TextField className={classes.item} id="surnameImput" label="Apellidos" type="text" variant="outlined" onChange={(e) => setSurname(e.target.value)} />
                <TextField className={classes.item} id="emailImput" label="Email" type="text" variant="outlined" onChange = {(e)=>emailverification(e.target.value)} />
                <FormHelperText error = {true} disabled = {true}>Debe ser un email</FormHelperText>
                <TextField className={classes.item} id="passwordImput" label="Contraseña" type="text" variant="outlined" onChange={(e) => setPassword(e.target.value)} />
                <Select className={classes.item} labelId="demo-simple-select-label" id="roleImput" variant="outlined" label="Rol" value={role} onChange={handleChange} helperText="Por favor, seleccione una categoría para el producto">
                    {Object.values(roles).map((rol) => (
                        <MenuItem  key={rol} value={rol}>{rol}</MenuItem>
                    ))} 
                </Select>
                <Button type='submit' className={classes.item} variant="contained" color="primary">Crear Usuario</Button>
            </form>
        </div>
);
};

export default userManager;