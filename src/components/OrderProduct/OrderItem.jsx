import React, { useMemo, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useParams, Redirect, Link } from "react-router-dom";
import { Button, TextField } from "@material-ui/core";
// import ProductList from './productList';
import { useForm } from "../../hooks/useForm";

const useStyles = makeStyles((theme) => ({
  screen: {
    minHeight: "80vh",
  },
  root: {
    borderRadius: "5px",
    boxShadow: "2px 2px 15px #8888",
    height: "80px",
    margin: "15px",
    display: "flex",
    alignContent: "center",
  },
  inp: {
    margin: theme.spacing(0.9),
    width: "40%",
  },
  btns: {
    justifyContent: "space-between",
  },
  btn: {
    margin: theme.spacing(0.8),
    height: "55px",
    justifyContent: "space-between",
  },
  gen: {
    display: "flex",
    justifyContent: "space-between",
  },
  tblTh: {},
  tblTd: {},
  genTbl: {
    paddingLeft: "10px",
    display: "flex",
    // justifyContent: "flex-start",
    alignContent: "center",
  },
  item: {},
}));

export const OrderItem = ({
  orderId,
  model,
  product,
  date,
  amunt,
  delivered,
}) => {
  const classes = useStyles();
  const [noCompletOrder, setNoCompletOrder] = useState("");

  const handleIncompletOrder = () => {
    setNoCompletOrder(!noCompletOrder);
  };
  return (
    <div className={classes.root}>
      <div className={classes.genTbl}>
        <table>
          <tr>
            <th className={classes.item}>Nº Pedido</th>
            <th className={classes.item}>Fecha de pedido</th>
            <th className={classes.item}>Marca</th>
            <th className={classes.item}>Modelo</th>
            <th className={classes.item}>Pedido</th>
          </tr>

          <tr>
            <td className={classes.item}>{orderId}</td>
            <td className={classes.item}>{date}</td>
            <td className={classes.item}>{product}</td>
            <td className={classes.item}>{model}</td>
            <td className={classes.item}>{amunt}</td>
          </tr>
        </table>
      </div>
      <div className={classes.gen}>
        {!noCompletOrder ? (
          <div>
            <Button
              className={classes.btn}
              variant="contained"
              color="secondary"
              onClick={handleIncompletOrder}
            >
              Pedido Incompleto
            </Button>

            <Button className={classes.btn} variant="contained" color="primary">
              Pedido Completo
            </Button>
          </div>
        ) : null}
        {noCompletOrder ? (
          <div>
            <TextField
              type="number"
              label="Cantidad Recibida"
              className={classes.inp}
              variant="outlined"
            />
            <Button
              onClick={() => {
                delivered = true;
              }}
              className={classes.btn}
              variant="contained"
              color="primary"
            >
              Recibido
            </Button>
            <Button
              className={classes.btn}
              variant="contained"
              color="secondary"
              onClick={handleIncompletOrder}
            >
              Cancelar
            </Button>
          </div>
        ) : null}
      </div>
    </div>
  );
};
