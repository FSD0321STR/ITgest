import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Button, TextField } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    root: {
        borderRadius:"5px",
        boxShadow: "2px 2px 15px #8888",
        width: "100%",
        height: "80px",
        margin:"15px",

    },
    inp: {
        
        margin: theme.spacing(0.8),
        marginTop: theme.spacing(1.5),
        width: "180px",
        height: "50px",
    },
    btn: {
        margin: theme.spacing(0.8),
        marginTop: theme.spacing(1.5),
        height: "55px",
    },
    gen:{
        margin: theme.spacing(0.8),
        left:"70%",
        top: "-52px",
        height: "55px",
        position: 'relative'
        
    },
    tblTh:{
        paddingLeft:"50px",
        margin:"10px",
    },
    tblTd:{
        paddingLeft:"50px",
        margin:"10px",
        color:"#283747",
    },
    genTbl:{
        position: 'relative',
        top: "15px",

        
    }
  }));

export const OrderList = () => {
    const classes = useStyles();
    const [noCompletOrder, setNoCompletOrder] = useState('');

    const handleIncompletOrder = () =>{
        setNoCompletOrder(!noCompletOrder);
    }

    return (
        <div className={classes.root}>
            
                <div className={classes.genTbl}>
                <table >
                    
                    <tr>
                        <th className={classes.tblTh}>Nº Pedido</th>
                        <th className={classes.tblTh}>Fecha de pedido</th>
                        <th className={classes.tblTh}>Marca</th>
                        <th className={classes.tblTh}>Modelo</th>
                        <th className={classes.tblTh}>Pedido</th>
                    </tr>
                    
                    <tr>
                        <td className={classes.tblTd}>561582</td>
                        <td className={classes.tblTd}>08/07/2021</td>
                        <td className={classes.tblTd}>Iphone</td>
                        <td className={classes.tblTd}>12 Pro</td>
                        <td  className={classes.tblTd}>5</td>
                    </tr>

                </table>
                    
                </div>
                
                {!noCompletOrder ?(
                <div className={classes.gen} >
                    <Button
                        className={classes.btn}
                        variant="contained"
                        color="secondary"
                        onClick={handleIncompletOrder}
                    >Pedido Incompleto
                    </Button>
                    
                    <Button
                        className={classes.btn}
                        variant="contained"
                        color="primary"
                    >Pedido Completo
                    </Button>
                    </div>
                ): null }
                {noCompletOrder ?(
                    <div className={classes.gen}>
                    <TextField
                        type="number"
                        label="Cantidad Recibida" 
                        className={classes.inp}
                        variant="outlined"
                    />    
                    <Button
                        className={classes.btn}
                        variant="contained"
                        color="primary"
                    >Recibido
                    </Button>
                    <Button
                        className={classes.btn}
                        variant="contained"
                        color="secondary"
                        onClick={handleIncompletOrder}
                    >Cancelar
                    </Button>

                    

                </div>
            ):null}
            
            
        </div>
    )
}
