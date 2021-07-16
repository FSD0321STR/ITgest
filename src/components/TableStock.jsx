import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import api from '../helpers/api';

const columns = [
  { id: 'id', 
    label: 'Id', 
    minWidth: 100,
  },
  { id: 'category', 
    label: 'Categoria', 
    minWidth: 100
  },
  {
    id: 'brand',
    label: 'Marca',
    minWidth: 100,
  },
  {
    id: 'model',
    label: 'Modelo',
    minWidth: 100,
  },
  {
    id: 'supplier',
    label: 'Proveedor',
    minWidth: 100,
  },
  {
    id: 'price',
    label: 'Precio EURO',
    minWidth: 100,
    align: 'right',
    format: (value) => value.toLocaleString('en-EU'),
  },
  {
    id: 'stock',
    label: 'Stock',
    minWidth: 100,
    align: 'right',
    format: (value) => value.toLocaleString('en-EU'),
  },
];

function createData(id, category, brand, model, supplier, price, stock) {
  
  // const getItem = async (data) => {
  //   const item = { 
  //     id: data.id, 
  //     category: data.category,
  //     brand: data.brand,
  //     model: data.model,
  //     supplier: data.provider,
  //     price: data.price,
  //     stock: data.minStock,
  
  //   };
  //   console.log(item);
  //   await api.allItem(item);
  //   // history.push('/stock');
  //   console.log(item)
  // };

  return { id, category, brand, model, supplier, price, stock };
}






const rows = [
  createData("000001" , "Teléfono", "Apple", "Iphone 12 Pro", "Apple S.L.", 1280, 12 ),
  createData("000002" , "Teléfono", "Samsung", "S21", "Samsung S.L.", 1020, 9 ),
  createData("000004" , "Teléfono", "Huawei", "P40", "Huawei S.L.", 950, 4 ),
  createData("000005" , "Ordenador", "Apple", "MacBook Pro", "Apple S.L.", 2100, 7 ),
  createData("000006" , "Ordenador", "Razer", "Razer 500", "Razer S.L.", 1800, 3 ),
  createData("000007" , "Cámara", "Sony", "Alpha III", "Sony S.L.", 2800, 2),
  createData("000008" , "Reloj", "Apple", "AppleWatch", "Apple S.L.", 580, 6 ),
  createData("000009" , "SmartTV", "LG", "MS62", "LG S.L.", 730, 2 ),
  createData("000010" , "SmartTV", "Sony", "Bravia", "Sony S.L.", 3000, 2 ),
  createData("000011" , "Auriculares", "Apple", "Airpod", "Apple S.L.", 178, 20 ),
  createData("000012" , "Cargador", "Apple", "MacBook Pro", "Apple S.L.", 70, 8 ),
  createData("000013" , "Auriculares", "Samsung", "S121", "Samsung S.L.", 40, 11 ),

];


const useStyles = makeStyles({
  screen: {
    minHeight: "80vh",

  },
  root: {
      width: '100%',
      margin: "10px"

    
  },
  container: {
    maxHeight: "700px",
    display: "flex",
    justifyContent: "center",
   
  },
  headTab: {
    backgroundColor: "#3f51b5",


  },
  boxTable: {
    borderRadius:"5px",
    boxShadow: "2px 2px 15px #8888",
    backgroundColor: "#FFFFF",
    display: "flex",
    justifyContent: "center",
    margin: "20px"
    

  },

  //kjkasdjk

  

});

export default function StickyHeadTable() {
  const classes = useStyles();
 
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  // const [selected, setSelected] = useState("");
  // const [options, setOptions ] = useState([]);

  // useEffect(async () => {
  //   await api.readAllItems()
  //     .then((rows) => {
  //       let transform = [];
  //       rows.forEach((row) => {
  //         transform.push({ value: row._id, label: row.id });
  //       });
  //       setOptions(transform);
  //     });
  //  }, []);

  // useEffect(async () => {
  //   await api.readAllItems().then(data)
  //   .then(data => setData(data)
    
  // )}, [data]);

  
  
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };


  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };



  return (
    <div className={classes.screen}>
    <div className={classes.boxTable}>
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead className={classes.headTab}>
              <TableRow >
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number' ? column.format(value) : value}
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
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
    </div>
  );
}
