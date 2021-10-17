import React, { useContext, useState } from "react";
import categoryBasedProducts from "../utilities/categoryBasedProducts";
import InStock from "./InStock";
import Message from "./Message";
import { productCtx } from "./ProductContext";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

export default function FilterableProductTable() {
  const { products } = useContext(productCtx);
  const [stock, setStock] = useState();
  const [category, setCategory] = useState("");

  const { categoryBasedProductsList, inStockProducts, allProducts } =
    categoryBasedProducts(products);
  const categoryProducts = categoryBasedProductsList();

  const filteredProducts = stock
    ? inStockProducts(categoryProducts[category])
    : allProducts(categoryProducts[category]);

  return (
    <div className="container w-50 my-2">
      <SearchBar
        categoryList={Object.keys(categoryProducts)}
        setCategory={setCategory}
      />
      <InStock setStock={setStock} />
      {category ? (
        <ProductTable products={filteredProducts} category={category} />
      ) : (
        <Message />
      )}
    </div>
  );
}
