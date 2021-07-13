import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    screen: {
        minHeight: "80vh",
    },
    root: {
        borderRadius:"5px",
        boxShadow: "2px 2px 15px #8888",
        padding: "15px",
        margin:"20px",
        display: "flex",
        justifyContent:"flex-end",
        alignContent: "flex-end",
        flexDirection: "column"
    },
    suportImage: {
        backgroundImage:
            "url(../img/00001.jpg)",
      },
}));

export const Contact = () => {
    const classes = useStyles();
    return (
        <div className={classes.screen}>
            <div className={classes.root}>
                <div className={classes.suportImage}>
                </div>
                <h1> Trabajemos juntos </h1>
                <hr 
                    color="#f50057" 
                    width="100%"
                />
                <p>Si tienes cualquier problema con la APP contacta con nosotros:</p>
                <p>Email: <b>support@itgest.com</b></p>
                <p>Teléfono: <b>+34 900 600 231</b></p>
            </div>
        </div>
    )
}
