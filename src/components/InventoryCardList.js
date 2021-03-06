import React, { useState } from "react";
import InventoryCard from "./InventoryCard";

function InventoryCardList({ products, updateInventory, updateInventoryByDeletingProduct }) {
  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const [stock, setStock] = useState();

  const onUpdateChangesClick = (product) => {
      updateInventory({
        ...product,
        price: price || product.price,
        name: title || product.name,
        stocked: stock || product.stocked,
      });
  };

  const onDeleteButtonClick = (productId) => {
    updateInventoryByDeletingProduct(productId);
  }

  return (
    <div className="mt-5">
      <div className="d-flex flex-row flex-wrap justify-content-between">
        {products.map((product) => (
          <InventoryCard
            key={product.id}
            product={product}
            setTitle={setTitle}
            setPrice={setPrice}
            setStock={setStock}
            onUpdateChangesClick={() => {
              onUpdateChangesClick(product);
            }}
            onDeleteButtonClick={(productId) => {
              onDeleteButtonClick(productId)
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default InventoryCardList;
