import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import "../App.css";
import { Typography } from '@material-ui/core';


// Generate Order Data
function createData(ref, name, brand, provider, description, price, nStock, nStockS) {
  return { ref, name, brand, provider, description, price, nStock, nStockS };
}

const rows = [
  createData(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44, 54145, 2345),
  createData(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 866.99, 54145, 2345),
  createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81, 54145, 2345),
  createData(3, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39, 54145, 2345),
  createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79, 54145, 2345),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((props) => ({
  seeMore: {
    color: "red",
    
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title color="primary">Recent Orders</Title>
      <Typography className={classes.seeMore}>Hola me llamo pepe</Typography>
      <Table size="small" color="red">
        <TableHead>
          <TableRow>
            <TableCell color="red">Referencia</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Marca</TableCell>
            <TableCell>Proveedor</TableCell>
            <TableCell>Descripción</TableCell>
            <TableCell>Precio</TableCell>
            <TableCell>En stock</TableCell>
            <TableCell>Stock seguridad</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.ref}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.brand}</TableCell>
              <TableCell>{row.provider}</TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell>{row.price}</TableCell>
              <TableCell>{row.nStock}</TableCell>
              <TableCell>{row.nStockS}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}