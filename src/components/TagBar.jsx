<<<<<<< HEAD
import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
// import MediaCard from './Product'
import { Button } from "@material-ui/core";
// import MultilineTextField from './FormCreateProduct'
import Orders from "./dashboard";

// import CollapsibleTable from 'TableStock';

=======
import React, {useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
// import MediaCard from './Product'
import { Button } from '@material-ui/core';
// import MultilineTextFields from './FormCreateProduct'
// import AppRouters from '../routers/AppRouters'


// import CollapsibleTable from 'TableStock';


>>>>>>> Prueba
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
<<<<<<< HEAD
    "aria-controls": `simple-tabpanel-${index}`,
=======
    'aria-controls': `simple-tabpanel-${index}`,
>>>>>>> Prueba
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
<<<<<<< HEAD
  const [value, setValue] = React.useState(0);

=======

  const [value, setValue] = useState(0);
>>>>>>> Prueba
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

<<<<<<< HEAD
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
=======
  const [close, setClose] = useState();
  const handelClose = () => {
    setClose
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
>>>>>>> Prueba
          <Tab label="Stock" {...a11yProps(0)} />
          <Tab label="Pedidos" {...a11yProps(1)} />
          <Tab label="Productos" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
<<<<<<< HEAD
        Stock
        <Orders />
      </TabPanel>
      <TabPanel value={value} index={1}></TabPanel>

      <TabPanel value={value} index={2}>
        {/* Productos de tu App
        
        <MediaCard /> */}
=======
          
      </TabPanel>
      <TabPanel value={value} index={1}>




        


      </TabPanel>

      <TabPanel value={value} index={2}>
      Productos de tu App

      <br />
      <br />
      <br />

      <Button value="close" size="large" variant="contained" color="primary" onChange={handelClose} >
           Crear producto 
      </Button>
      <br />
      <br />

      <div id="form">
        {/* <MultilineTextFields /> */}
        {/* <AppRouters /> */}
      </div>


      
>>>>>>> Prueba
      </TabPanel>
    </div>
  );
}
<<<<<<< HEAD
console.log(Button);
=======
>>>>>>> Prueba
