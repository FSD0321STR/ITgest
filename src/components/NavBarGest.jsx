import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function NavBarGest() {
  const classes = useStyles();
  const [value, setValue] = React.useState('');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <TabContext value={value}>
        <AppBar position="static">
          <TabList onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Stock" value="1" />
            <Tab href="/order" label="Pedido" value="2" />
            <Tab   label="Producto" value="3" />
          </TabList>
        </AppBar>
        {/* <TabPanel value="1">Stock</TabPanel>
        <TabPanel value="2">Pedido</TabPanel>
        <TabPanel value="3">Producto</TabPanel> */}
      </TabContext>
    </div>
  );
}