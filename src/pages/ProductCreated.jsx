import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { ProductItem } from "../components/ProductCreated/ProductItem";
import ProductList from "../components/ProductCreated/ProductList";
import api from "../helpers/api";
import {useForm} from "../hooks/useForm"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    gridTemplateColumns: "50% 50%",
    margin: "20px",
    gridGap: "20px",
    minHeight: "80vh",

  },
}));


function ProductCreated () {
    const classes = useStyles();

    const [ formValues, handleInputChange ] = useForm({
        category: '',
        model: '',
        brand: '',
        supplier: '',
        price: '',
        stock: ''
    });


    const { category, model, brand, supplier, price, stock } = formValues;


    useEffect(async () => {
      await api.getAllProduct().then(handleInputChange);
    }, []);
  
    // const deleteUser = async (userId) => {
    //   console.log(userId);
    //   const response = await api.deleteUser(userId);
    //   alert(response.message);
    //   const users = await api.getAllUsers();
    //   setUsers(users);
    // };
    return (
        <div className={classes.root}>
          <div>
            <ProductList>
              {users.map((formValues) => (
                <ProductItem
                  category={formValues.category}
                  id={formValues.id}
                  brand={formValues.brand}
                />
              ))}
            </ProductList>
          </div>
          {/* <UserForm user={editingUser} /> */}
        </div>
      );
};
export default ProductCreated;