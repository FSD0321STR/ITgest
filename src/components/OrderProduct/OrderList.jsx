import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Button, TextField } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    screen: {
        minHeight: "80vh",
    },
    root: {
        borderRadius:"5px",
        boxShadow: "2px 2px 15px #8888",
        height: "80px",
        margin:"15px",
        display: "flex",
        alignContent: "center",
        
    },
    inp: {
        
        margin: theme.spacing(0.9),
        width: "40%",

    },
    btn: {
        margin: theme.spacing(0.8),
        height: "55px", 
    },
    gen: {
        display: "flex",
        justifyContent: "flex-end",   
    },
    tblTh:{ 
    },
    tblTd:{
  
    },
    genTbl:{
        paddingLeft: "10px",
        display:"flex",
        // justifyContent: "flex-start",
        alignContent: "center",
   
    }
  }));

export const OrderList = () => {
    const classes = useStyles();
    const [noCompletOrder, setNoCompletOrder] = useState('');

    const handleIncompletOrder = () =>{
        setNoCompletOrder(!noCompletOrder);
    }

    return (
        <div className={classes.screen}>
            <div className={classes.root}>

                    <div className={classes.genTbl}>
                        <table >

                            <tr>
                                <th >Nº Pedido</th>
                                <th >Fecha de pedido</th>
                                <th >Marca</th>
                                <th >Modelo</th>
                                <th >Pedido</th>
                            </tr>

                            <tr>
                                <td >561582</td>
                                <td >08/07/2021</td>
                                <td >Iphone</td>
                                <td >12 Pro</td>
                                <td >5</td>
                            </tr>

                        </table>

                    </div>
                    <div className={classes.gen}>
                        {!noCompletOrder ?(
                            <div>
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
                            <div >
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
                        
            </div>
        </div>
    )
}
