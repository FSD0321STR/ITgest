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
function createData(ref, name, brand, provider, description, price, nStock,
   nStockS) {
  return { ref, name, brand, provider, description, price, nStock, nStockS };
}

const rows = [
  createData(0, '980 SSD 1TB PCIe 30 NVMe M2', 'Samsung', 'pccomponentes',
   'La unidad Samsung 980 hereda el legado de la innovadora tecnología SSD de Samsung. Dispone de una fantástica fiabilidad, un impresionante rendimiento mejorado y una compatibilidad que contenta tanto a creadores de contenido, como a profesionales de TI, así como a usuarios habituales. El SSD interna Samsung se lo pone fácil a cualquier usuario de un ordenador de sobremesa o un portátil que sea compatible con una unidad en formato M.2. ',
   153,68, 26, 5),
  createData(1, 'X470 Gaming Plus Max', 'MSI', 'pccomponentes', 'Las placas base MSI cuentan con toneladas de diseño conveniente e inteligente, como una conveniente zona de bloqueo de encabezado de clavija, ubicación amigable SATA y USB, etc., para que los usuarios de bricolaje puedan elegir cualquier plataforma de juego que deseen.',
  109,98, 5, 3),
  createData(2, 'GeForce RTX 3090 GAMING X TRIO 24GB GDDR6X',
   'MSI', 'pccomponentes', 'La GeForce RTX ™ 3090 es una gran GPU (BFGPU) feroz con un rendimiento de clase TITAN. Está impulsado por Ampere, la arquitectura RTX de segunda generación de NVIDIA, que duplica el rendimiento del trazado de rayos y la inteligencia artificial con núcleos RT mejorados, núcleos Tensor y nuevos multiprocesadores de transmisión. Además, cuenta con asombrosos 24 GB de memoria G6X, todo para brindar la mejor experiencia de juego.',
   4543,28, 12, 2),
  createData(3, 'Tesla A40 48GB GDDR6', 'Nvidia', 'pccomponentes',
   'NVIDIA® A40 ofrece la solución basada en centros de datos que los diseñadores, ingenieros, artistas y científicos necesitan para enfrentar los desafíos actuales. Construido sobre la arquitectura NVIDIA Ampere, el A40 combina los RT Cores, Tensor Cores y CUDA® Cores de última generación con 48GB de memoria gráfica para renderizado, computación y rendimiento de inteligencia artificial sin precedentes, Desde poderosas estaciones de trabajo virtuales accesibles desde cualquier lugar, hasta nodos de renderizado dedicados, A40 está diseñada para abordar las cargas de trabajo de computación visual más exigentes desde el centro de datos.',
   7171,98, 3, 1),  
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((props) => ({
  seeMore: {
    color: "green",
  },
  style1: {
    color: "blue",
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title color="primary">Recent Orders</Title>
      <Typography className={classes.seeMore}>Hola me llamo pepe</Typography>
      <Table size="small" color="red">
        <TableHead >
          <TableRow >
            <TableCell className={classes.style1}>Referencia</TableCell>
            <TableCell className={classes.style1}>Nombre</TableCell>
            <TableCell className={classes.style1}>Marca</TableCell>
            <TableCell className={classes.style1}>Proveedor</TableCell>
            <TableCell className={classes.style1}>Descripción</TableCell>
            <TableCell className={classes.style1}>Precio</TableCell>
            <TableCell className={classes.style1}>En stock</TableCell>
            <TableCell className={classes.style1}>Stock seguridad</TableCell>

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