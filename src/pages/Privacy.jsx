import React from 'react';
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

}));


export const Privacy = () => {
    const classes = useStyles();
    return (
        <div className={classes.screen}>
            <div className={classes.root}>

            </div>

            
        </div>
    )
}
