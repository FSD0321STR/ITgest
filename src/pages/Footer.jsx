import { Container, Link } from "@material-ui/core";
import React  from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    root: {
      display:"flex",
      alignContent: "flex-end",
      justifyContent: "center",
      

    },
    footer: {
      padding: theme.spacing(2),
      textAlign: 'left',
      background: '#3f51b5',
      color: 'white',
      width: "100%",
      display:"flex",

    },
    link: {
        textAlign: 'float',
    }
  }));

export default function Footer(){
    const classes = useStyles();
    return (
        <footer className={classes.root}>
            <Box className={classes.footer}>
                <Container className={classes.link} maxWidth="lg">
                    <Grid container spacing ={5}>
                        <Grid item xs={12} sm={4}>
                            <Box><strong>Ayuda</strong></Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Contacto
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Soporte
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Privacidad
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBotton={1} borderColor="text.primary"><strong>Usuario</strong></Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Logueo
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Registro
                                </Link>
                            </Box>                            
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBotton={1}><strong>App</strong></Box>
                            <Box>
                                <Link 
                                    style={{textDecoration:"none", color:"white"}}  
                                    href="/stock"
                                > Stock
                                </Link>
                            </Box>
                            <Box>
                                <Link   
                                    style={{textDecoration:"none", color:"white"}}  
                                    href="/order"
                                    > Pedidos
                                </Link>
                            </Box>
                            <Box>
                                <Link 
                                    style={{textDecoration:"none", color:"white"}}  
                                    href="/product"
                                > Productos
                                </Link>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </footer>
    );
}
