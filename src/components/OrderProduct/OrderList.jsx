import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Button, TextField } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: "100%",
        height: theme.spacing(10),
      },
    },
    inp: {
        
        margin: theme.spacing(0.8),
        width: "180px",
        height: "50px",


        


    },
    btn: {
        margin: theme.spacing(0.8),
        marginTop: theme.spacing(1),
        height: "55px",

        
    },

    gen:{
        margin: theme.spacing(0.8),
        left:"75%",
        top: "0px",
        height: "55px",
        position: 'relative'
        

    }
  }));

export const OrderList = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Paper elevation={3}>
                <div>

                </div>

                <div className={classes.gen} >
                    <Button
                        className={classes.btn}
                        variant="outlined"
                        color="primary"
                    >Recibido
                    </Button>

                    <TextField
                        label="Cantidad Recibida" 
                        className={classes.inp}
                        variant="outlined"
                    />
                </div>
            </Paper>
            
        </div>
    )
}
