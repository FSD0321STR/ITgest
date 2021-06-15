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
        

    }
}));


function userManager(){
    const classes = useStyles(); 
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [mail, setMail] = useState("");
    const [ password, setPassword] = useState("");
    const [role, setRole] = useState(roles.R1);
    const [errorMessage, setErrorMessage] = useState("")

    const handleChange = (event) => {
        setRole(event.target.value);
    };
// revisar
    function emailverification (email) {
        useState("");
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        console.log(email)
        if ( re.test(email) ) {
            
          setMail(email)
        } else {
            setErrorMessage("Email incorrecto")
        };
    
    };

    function UserCreator (){

    }

    const errorStyle = {
        color: 'red',
        border: 'solid red'
    }


    return(
        <div className={classes.root} >
            <div></div>
            <form className= {classes.form} noValidate autoComplete="off" >
                <TextField id="nameImput" label="Nombre" type="text" variant="outlined" value={(e)=>setName(event.target.value)} />
                <TextField id="surnameImput" label="Apellidos" type="text" variant="outlined" value={(e)=>setSurname(e.target.value)} />
                <TextField id="emailImput" label="Email" type="text" variant="outlined" onChange = {(e)=>emailverification(e.target.value)} />
                <FormHelperText>Error</FormHelperText>
                <TextField id="passwordImput" label="Contraseña" type="text" variant="outlined" value={(e)=>setPassword(e.target.value)} />
                <Select  labelId="demo-simple-select-label" id="roleImput" variant="outlined" label="Rol" value={role} onChange={handleChange} helperText="Por favor, seleccione una categoría para el producto">
                    {Object.values(roles).map((rol) => (
                        <MenuItem  key={rol} value={rol}>{rol}</MenuItem>
                    ))} 
                </Select>
                <Button  variant="contained" color="primary">Crear Usuario</Button>
            </form>
        </div>
);
};

export default userManager;