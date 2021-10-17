import React, { useContext, useState } from "react";
import InventoryCardList from "../components/InventoryCardList";
import { productCtx } from "../components/ProductContext";
import SearchBar from "../components/SearchBar";
import request from "../services/request";
import categoryBasedProducts from "../utilities/categoryBasedProducts";

function ManageInventory() {
  const { products, setProducts } = useContext(productCtx);
  const { handlePutRequest, handleDeleteRequest } = request();
  const {categoryBasedProductsList} = categoryBasedProducts(products);
  const categoryProducts = categoryBasedProductsList();
  const [category, setCategory] = useState("");

  const updateInventory = async (product) => {
    const reqOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    };

    const {updatedProduct, status} = await handlePutRequest(reqOptions, product.id);
    if (status) {
      products.splice(product.id - 1, 1, updatedProduct);
      setProducts(products);
      alert(`${updatedProduct.name} successfully updated`);
    }else{
      alert("Request failed")
    }
  };

  const updateInventoryByDeletingProduct = async (id) => {
    const reqOptions = {
      method: "DELETE",
    };

    const message = window.confirm("Are you sure to delete the item?");
    if (message) {
      const productDeleteStatus = await handleDeleteRequest(reqOptions, id);
      if (!productDeleteStatus) return;
      setProducts(
        products.filter((product) => {
          return product.id != id;
        })
      );
    }
  };

  return (
    <div className="container w-50">
      <SearchBar categoryList={Object.keys(categoryProducts)} setCategory={setCategory}/>
      <InventoryCardList
        products={categoryProducts[category] || products}
        updateInventory={(product) => {
          updateInventory(product);
        }}
        updateInventoryByDeletingProduct={(id) => {
          updateInventoryByDeletingProduct(id);
        }}
      />
    </div>
  );
}

export default ManageInventory;
