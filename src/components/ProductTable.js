import React from "react";
import ProductRow from "./ProductRow";
import ProductCategoryRow from "./ProductCategoryRow";

function ProductTable({ products, category }) {
  return (
    <div>
      <div className="d-flex justify-content-evenly fw-bold">
        <div>Name</div>
        <div>Price</div>
      </div>
      <ProductCategoryRow category={category} length={products.length} />
      {products.map((product) => (
        <ProductRow
          key={product.name}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
  );
}

export default ProductTable;
