import React, { useEffect, useState } from "react";
import { FormCreateProduct } from "../components/FormCreateProduct/FormCreateProduct";
import ProductList from "../components/ProductCreated/ProductList";
import { ProductItem } from "../components/ProductCreated/ProductItem";
import api from "../helpers/api";

export const ProductListPage = () => {
    const [items, setItems] = useState([]);

    useEffect(async () => {
        await api.getAllItem()
          .then(setItems);
      }, []);

    const createItem = async (item) => {
        // const items = formValues();
  
        try {
          const response = await api.postItem(item);
          if (response.status < 400 && response.status < 500) {
            handleInputChange ([...items, item]);
          }
        } catch {
          handleInputChange (items);
          // createNotification("Could not create task");
        }
    };
    

    return (
    <div>
      <FormCreateProduct onSubmit={createItem} />
      <ProductList>
        {items.map((item) => (
          <ProductItem
            key={item._id}
            id={item._id}
            category={item.category}
            model={item.model}
            brand={item.brand}
            stock={item.stock}
            // onClick={completeTask}
            // onRemove={removeTask}
          />
        ))}
      </ProductList>
      {/* {completedTasksCount > 0 && (
        <button onClick={clearCompleted}>Clear completed tasks</button>
      )}
             */}
    </div>
    )
}


