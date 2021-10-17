import React, { useContext } from "react";
import { useHistory } from "react-router";
import InventoryForm from "../components/InventoryForm";
import { productCtx } from "../components/ProductContext";
import request from "../services/request";

function AddInventory() {
  const history = useHistory();
  const { products, setProducts } = useContext(productCtx);
  const { handlePostRequest } = request();

  const addProduct = async (product) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    };
    
    const {newProduct, status} = await handlePostRequest(requestOptions);
    if (status) {
      setProducts([...products, newProduct]);
      alert(`${newProduct.name} successfully added`);
      history.push("/");
    }else{
      alert("Request failed")
    }
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
