import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import "@fontsource/roboto";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";

const columns = [
  {
    id: "ref",
    label: "Referencia",
    minWidth: 50,
    inputType: "text",
  },
  {
    id: "name",
    label: "Nombre",
    minWidth: 170,
    inputType: "text",
  },
  {
    id: "brand",
    label: "Marca",
    minWidth: 100,
    align: "left",
    inputType: "select",
  },
  {
    id: "provider",
    label: "Proveedor",
    minWidth: 100,
    align: "left",
    inputType: "text",
  },
  {
    id: "description",
    label: "Descripción",
    minWidth: 250,
    align: "left",
    inputType: "text",
  },
  {
    id: "price",
    label: "Precio",
    minWidth: 50,
    inputType: "number",
  },
  { id: "nStock", label: "Stock", minWidth: 50, inputType: "number" },
  {
    id: "nStockS",
    label: "Stock Seguridad",
    minWidth: 140,
    inputType: "number",
  },
];

function createData(
  ref,
  name,
  brand,
  provider,
  description,
  price,
  nStock,
  nStockS
) {
  return { ref, name, brand, provider, description, price, nStock, nStockS };
}

const rows = [
  createData(
    0,
    "980 SSD 1TB PCIe 30 NVMe M2",
    "Samsung",
    "pccomponentes",
    "La unidad Samsung 980 hereda el legado de la innovadora tecnología SSD de Samsung. Dispone de una fantástica fiabilidad, un impresionante rendimiento mejorado y una compatibilidad que contenta tanto a creadores de contenido, como a profesionales de TI, así como a usuarios habituales. El SSD interna Samsung se lo pone fácil a cualquier usuario de un ordenador de sobremesa o un portátil que sea compatible con una unidad en formato M.2. ",
    153,
    68,
    26,
    5
  ),
  createData(
    1,
    "X470 Gaming Plus Max",
    "MSI",
    "pccomponentes",
    "Las placas base MSI cuentan con toneladas de diseño conveniente e inteligente, como una conveniente zona de bloqueo de encabezado de clavija, ubicación amigable SATA y USB, etc., para que los usuarios de bricolaje puedan elegir cualquier plataforma de juego que deseen.",
    109,
    98,
    5,
    3
  ),
  createData(
    2,
    "GeForce RTX 3090 GAMING X TRIO 24GB GDDR6X",
    "MSI",
    "pccomponentes",
    "La GeForce RTX ™ 3090 es una gran GPU (BFGPU) feroz con un rendimiento de clase TITAN. Está impulsado por Ampere, la arquitectura RTX de segunda generación de NVIDIA, que duplica el rendimiento del trazado de rayos y la inteligencia artificial con núcleos RT mejorados, núcleos Tensor y nuevos multiprocesadores de transmisión. Además, cuenta con asombrosos 24 GB de memoria G6X, todo para brindar la mejor experiencia de juego.",
    4543,
    28,
    12,
    2
  ),
  createData(
    3,
    "Tesla A40 48GB GDDR6",
    "Nvidia",
    "pccomponentes",
    "NVIDIA® A40 ofrece la solución basada en centros de datos que los diseñadores, ingenieros, artistas y científicos necesitan para enfrentar los desafíos actuales. Construido sobre la arquitectura NVIDIA Ampere, el A40 combina los RT Cores, Tensor Cores y CUDA® Cores de última generación con 48GB de memoria gráfica para renderizado, computación y rendimiento de inteligencia artificial sin precedentes, Desde poderosas estaciones de trabajo virtuales accesibles desde cualquier lugar, hasta nodos de renderizado dedicados, A40 está diseñada para abordar las cargas de trabajo de computación visual más exigentes desde el centro de datos.",
    7171,
    98,
    3,
    1
  ),
  createData(
    0,
    "980 SSD 1TB PCIe 30 NVMe M2",
    "Samsung",
    "pccomponentes",
    "La unidad Samsung 980 hereda el legado de la innovadora tecnología SSD de Samsung. Dispone de una fantástica fiabilidad, un impresionante rendimiento mejorado y una compatibilidad que contenta tanto a creadores de contenido, como a profesionales de TI, así como a usuarios habituales. El SSD interna Samsung se lo pone fácil a cualquier usuario de un ordenador de sobremesa o un portátil que sea compatible con una unidad en formato M.2. ",
    153,
    68,
    26,
    5
  ),
  createData(
    1,
    "X470 Gaming Plus Max",
    "MSI",
    "pccomponentes",
    "Las placas base MSI cuentan con toneladas de diseño conveniente e inteligente, como una conveniente zona de bloqueo de encabezado de clavija, ubicación amigable SATA y USB, etc., para que los usuarios de bricolaje puedan elegir cualquier plataforma de juego que deseen.",
    109,
    98,
    5,
    3
  ),
  createData(
    2,
    "GeForce RTX 3090 GAMING X TRIO 24GB GDDR6X",
    "MSI",
    "pccomponentes",
    "La GeForce RTX ™ 3090 es una gran GPU (BFGPU) feroz con un rendimiento de clase TITAN. Está impulsado por Ampere, la arquitectura RTX de segunda generación de NVIDIA, que duplica el rendimiento del trazado de rayos y la inteligencia artificial con núcleos RT mejorados, núcleos Tensor y nuevos multiprocesadores de transmisión. Además, cuenta con asombrosos 24 GB de memoria G6X, todo para brindar la mejor experiencia de juego.",
    4543,
    28,
    12,
    2
  ),
  createData(
    3,
    "Tesla A40 48GB GDDR6",
    "Nvidia",
    "pccomponentes",
    "NVIDIA® A40 ofrece la solución basada en centros de datos que los diseñadores, ingenieros, artistas y científicos necesitan para enfrentar los desafíos actuales. Construido sobre la arquitectura NVIDIA Ampere, el A40 combina los RT Cores, Tensor Cores y CUDA® Cores de última generación con 48GB de memoria gráfica para renderizado, computación y rendimiento de inteligencia artificial sin precedentes, Desde poderosas estaciones de trabajo virtuales accesibles desde cualquier lugar, hasta nodos de renderizado dedicados, A40 está diseñada para abordar las cargas de trabajo de computación visual más exigentes desde el centro de datos.",
    7171,
    98,
    3,
    1
  ),
  createData(
    0,
    "980 SSD 1TB PCIe 30 NVMe M2",
    "Samsung",
    "pccomponentes",
    "La unidad Samsung 980 hereda el legado de la innovadora tecnología SSD de Samsung. Dispone de una fantástica fiabilidad, un impresionante rendimiento mejorado y una compatibilidad que contenta tanto a creadores de contenido, como a profesionales de TI, así como a usuarios habituales. El SSD interna Samsung se lo pone fácil a cualquier usuario de un ordenador de sobremesa o un portátil que sea compatible con una unidad en formato M.2. ",
    153,
    68,
    26,
    5
  ),
  createData(
    1,
    "X470 Gaming Plus Max",
    "MSI",
    "pccomponentes",
    "Las placas base MSI cuentan con toneladas de diseño conveniente e inteligente, como una conveniente zona de bloqueo de encabezado de clavija, ubicación amigable SATA y USB, etc., para que los usuarios de bricolaje puedan elegir cualquier plataforma de juego que deseen.",
    109,
    98,
    5,
    3
  ),
  createData(
    2,
    "GeForce RTX 3090 GAMING X TRIO 24GB GDDR6X",
    "MSI",
    "pccomponentes",
    "La GeForce RTX ™ 3090 es una gran GPU (BFGPU) feroz con un rendimiento de clase TITAN. Está impulsado por Ampere, la arquitectura RTX de segunda generación de NVIDIA, que duplica el rendimiento del trazado de rayos y la inteligencia artificial con núcleos RT mejorados, núcleos Tensor y nuevos multiprocesadores de transmisión. Además, cuenta con asombrosos 24 GB de memoria G6X, todo para brindar la mejor experiencia de juego.",
    4543,
    28,
    12,
    2
  ),
  createData(
    3,
    "Tesla A40 48GB GDDR6",
    "Nvidia",
    "pccomponentes",
    "NVIDIA® A40 ofrece la solución basada en centros de datos que los diseñadores, ingenieros, artistas y científicos necesitan para enfrentar los desafíos actuales. Construido sobre la arquitectura NVIDIA Ampere, el A40 combina los RT Cores, Tensor Cores y CUDA® Cores de última generación con 48GB de memoria gráfica para renderizado, computación y rendimiento de inteligencia artificial sin precedentes, Desde poderosas estaciones de trabajo virtuales accesibles desde cualquier lugar, hasta nodos de renderizado dedicados, A40 está diseñada para abordar las cargas de trabajo de computación visual más exigentes desde el centro de datos.",
    7171,
    98,
    3,
    1
  ),
  createData(
    0,
    "980 SSD 1TB PCIe 30 NVMe M2",
    "Samsung",
    "pccomponentes",
    "La unidad Samsung 980 hereda el legado de la innovadora tecnología SSD de Samsung. Dispone de una fantástica fiabilidad, un impresionante rendimiento mejorado y una compatibilidad que contenta tanto a creadores de contenido, como a profesionales de TI, así como a usuarios habituales. El SSD interna Samsung se lo pone fácil a cualquier usuario de un ordenador de sobremesa o un portátil que sea compatible con una unidad en formato M.2. ",
    153,
    68,
    26,
    5
  ),
  createData(
    1,
    "X470 Gaming Plus Max",
    "MSI",
    "pccomponentes",
    "Las placas base MSI cuentan con toneladas de diseño conveniente e inteligente, como una conveniente zona de bloqueo de encabezado de clavija, ubicación amigable SATA y USB, etc., para que los usuarios de bricolaje puedan elegir cualquier plataforma de juego que deseen.",
    109,
    98,
    5,
    3
  ),
  createData(
    2,
    "GeForce RTX 3090 GAMING X TRIO 24GB GDDR6X",
    "MSI",
    "pccomponentes",
    "La GeForce RTX ™ 3090 es una gran GPU (BFGPU) feroz con un rendimiento de clase TITAN. Está impulsado por Ampere, la arquitectura RTX de segunda generación de NVIDIA, que duplica el rendimiento del trazado de rayos y la inteligencia artificial con núcleos RT mejorados, núcleos Tensor y nuevos multiprocesadores de transmisión. Además, cuenta con asombrosos 24 GB de memoria G6X, todo para brindar la mejor experiencia de juego.",
    4543,
    28,
    12,
    2
  ),
  createData(
    3,
    "Tesla A40 48GB GDDR6",
    "Nvidia",
    "pccomponentes",
    "NVIDIA® A40 ofrece la solución basada en centros de datos que los diseñadores, ingenieros, artistas y científicos necesitan para enfrentar los desafíos actuales. Construido sobre la arquitectura NVIDIA Ampere, el A40 combina los RT Cores, Tensor Cores y CUDA® Cores de última generación con 48GB de memoria gráfica para renderizado, computación y rendimiento de inteligencia artificial sin precedentes, Desde poderosas estaciones de trabajo virtuales accesibles desde cualquier lugar, hasta nodos de renderizado dedicados, A40 está diseñada para abordar las cargas de trabajo de computación visual más exigentes desde el centro de datos.",
    7171,
    98,
    3,
    1
  ),
  createData(
    0,
    "980 SSD 1TB PCIe 30 NVMe M2",
    "Samsung",
    "pccomponentes",
    "La unidad Samsung 980 hereda el legado de la innovadora tecnología SSD de Samsung. Dispone de una fantástica fiabilidad, un impresionante rendimiento mejorado y una compatibilidad que contenta tanto a creadores de contenido, como a profesionales de TI, así como a usuarios habituales. El SSD interna Samsung se lo pone fácil a cualquier usuario de un ordenador de sobremesa o un portátil que sea compatible con una unidad en formato M.2. ",
    153,
    68,
    26,
    5
  ),
  createData(
    1,
    "X470 Gaming Plus Max",
    "MSI",
    "pccomponentes",
    "Las placas base MSI cuentan con toneladas de diseño conveniente e inteligente, como una conveniente zona de bloqueo de encabezado de clavija, ubicación amigable SATA y USB, etc., para que los usuarios de bricolaje puedan elegir cualquier plataforma de juego que deseen.",
    109,
    98,
    5,
    3
  ),
  createData(
    2,
    "GeForce RTX 3090 GAMING X TRIO 24GB GDDR6X",
    "MSI",
    "pccomponentes",
    "La GeForce RTX ™ 3090 es una gran GPU (BFGPU) feroz con un rendimiento de clase TITAN. Está impulsado por Ampere, la arquitectura RTX de segunda generación de NVIDIA, que duplica el rendimiento del trazado de rayos y la inteligencia artificial con núcleos RT mejorados, núcleos Tensor y nuevos multiprocesadores de transmisión. Además, cuenta con asombrosos 24 GB de memoria G6X, todo para brindar la mejor experiencia de juego.",
    4543,
    28,
    12,
    2
  ),
  createData(
    3,
    "Tesla A40 48GB GDDR6",
    "Nvidia",
    "pccomponentes",
    "NVIDIA® A40 ofrece la solución basada en centros de datos que los diseñadores, ingenieros, artistas y científicos necesitan para enfrentar los desafíos actuales. Construido sobre la arquitectura NVIDIA Ampere, el A40 combina los RT Cores, Tensor Cores y CUDA® Cores de última generación con 48GB de memoria gráfica para renderizado, computación y rendimiento de inteligencia artificial sin precedentes, Desde poderosas estaciones de trabajo virtuales accesibles desde cualquier lugar, hasta nodos de renderizado dedicados, A40 está diseñada para abordar las cargas de trabajo de computación visual más exigentes desde el centro de datos.",
    7171,
    98,
    3,
    1
  ),
];

const useStyles = makeStyles({
  root: {
    width: "90%",
  },
  container: {
    height: 680,
    maxHeight: "50%",
  },
  header: {
    alignItems: "center",
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  <div>
                    <h3 className={classes.header}>{column.label}</h3>
                  </div>
                  {column.inputType === "select" && (
                    <div>
                      <Select variant="outlined">
                        <option aria-label="None" value="" />
                        <option value={10}>Samsung</option>
                        <option value={20}>MSI</option>
                        <option value={30}>NVIDIA</option>
                      </Select>
                    </div>
                  )}

                  {column.inputType === "text" && (
                    <TextField label={column.label} variant="outlined" />
                  )}

                  {column.inputType === "number" && (
                    <TextField
                      type="number"
                      label={column.label}
                      variant="outlined"
                    />
                  )}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
