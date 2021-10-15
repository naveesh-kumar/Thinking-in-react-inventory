import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import InventoryForm from "../components/InventoryForm";
import { productCtx } from "../components/ProductContext";

function AddInventory() {
  const history = useHistory();
  const { products, setProducts } = useContext(productCtx);

  const addProduct = (product) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    };
    handlePostRequest(requestOptions);
  };

  const handlePostRequest = (options) => {
    fetch("http://localhost:5000/products", options)
      .then((response) => response.json())
      .then((data) => {
        setProducts([...products, data]);
        history.push("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <InventoryForm
      addProduct={(product) => {
        addProduct(product);
      }}
    />
  );
}

export default AddInventory;
