import React, { useContext } from "react";
import InventoryCardList from "../components/InventoryCardList";
import { productCtx } from "../components/ProductContext";

function ManageInventory() {
  const { products, setProducts } = useContext(productCtx);

  const updateInventory = (product) => {
    const reqOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    };

    handlePutRequest(reqOptions, product.id);
  };

  const handlePutRequest = (options, id) => {
    fetch("http://localhost:5000/products/" + id, options)
      .then((response) => response.json())
      .then((data) => {
        products.splice(id - 1, 1, data);
        setProducts(products);
        alert(data.name +" successfully updated");
      });
  };

  return (
    <div>
      <InventoryCardList
        products={products}
        updateInventory={(product) => {
          updateInventory(product);
        }}
      />
    </div>
  );
}

export default ManageInventory;
