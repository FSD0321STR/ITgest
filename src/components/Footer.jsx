import { Container, Link } from "@material-ui/core";
import React  from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    footer: {
      padding: theme.spacing(3),
      textAlign: 'center',
      background: '#3f51b5',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
    },
    link: {
        textAlign: 'float',
    }
  }));

export default function Footer(){
    const classes = useStyles();
    return (
        <footer>
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
                                <Link href="/" color="inherit">
                                    Stock
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Pedidos
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Productos
                                </Link>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </footer>
    );
}
