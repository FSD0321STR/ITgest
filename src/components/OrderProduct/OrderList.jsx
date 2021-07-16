import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Button, TextField } from "@material-ui/core";
import { OrderItem } from "./OrderItem";
import UserForm from "../User/userForm";
import api from "../../helpers/api";

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
  btn: {
    margin: theme.spacing(0.8),
    height: "55px",
  },
  gen: {
    display: "flex",
    justifyContent: "flex-end",
  },
  tblTh: {},
  tblTd: {},
  genTbl: {
    paddingLeft: "10px",
    display: "flex",
    // justifyContent: "flex-start",
    alignContent: "center",
  },
}));

export const OrderList = () => {
  const classes = useStyles();

  //   const orders = [
  //     {
  //       _id: "60e1e38005c8d90a70f3b478",
  //       delivered: false,
  //       product: "Iphone",
  //       model: "12",
  //       productId: "njk2j2jk",
  //       provider: "Apple",
  //       amunt: 40,
  //       createdAt: "2021-07-04",
  //       updatedAt: "2021-07-04",
  //       __v: 0,
  //     },
  //     {
  //       _id: "60e1e39905c8d90a70f3b47b",
  //       delivered: false,
  //       product: "Samsung",
  //       model: "S12",
  //       productId: "njk2j2jk",
  //       provider: "Samsung",
  //       amunt: 70,
  //       createdAt: "2021-07-04",
  //       updatedAt: "2021-07-04",
  //       __v: 0,
  //     },
  //   ];

  const [orders, setOrders] = useState([]);

  useEffect(async () => {
    await api.allOrders().then(setOrders);
  }, []);

  let filtedOrders = orders.filter((order) => order.delivered === false);

  //   const [orders, setOrders] = useState([]);

  //   useEffect(async () => {
  //     await api.allOrders().then(setOrders);
  //   }, []);

  console.log(orders);

  return (
    <div className={classes.screen}>
      <div>
        {filtedOrders.map((order) => (
          <OrderItem
            key={order._id}
            orderId={order._id}
            model={order.model}
            product={order.product}
            date={order.createdAt}
            amunt={order.amunt}
            delivered={order.delivered}
          ></OrderItem>
        ))}
      </div>
    </div>
  );
};
