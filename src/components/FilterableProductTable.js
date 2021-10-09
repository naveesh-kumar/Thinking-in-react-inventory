import React, { useState, useContext } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import Message from "./Message";
import { productCtx } from "./ProductContext";

export default function FilterableProductTable() {

  const products = useContext(productCtx);
  const [category, setCategory] = useState("");
  const [categoryProducts, setCategoryProducts] = useState([]);

  const categorySearch = (searchCategory, stocked) => {
    setCategory(searchCategory);

    const filteredProducts =
      searchCategory === "All Products"
        ? products
        : categoryBasedProducts(searchCategory);

    stocked
      ? setCategoryProducts(showOnlyInStockProducts(filteredProducts))
      : setCategoryProducts(filteredProducts);
  };

  const categoryBasedProducts = (category) => {
    const categoryBasedProducts = products.reduce((acc, cv) => {
      acc[cv["category"]] = acc[cv["category"]] || [];
      acc[cv["category"]].push(cv);
      return acc;
    }, {});

    return categoryBasedProducts[category];
  };

  const showOnlyInStockProducts = (products) => {
    return products.filter((product) => product.stocked);
  };

  return (
    <div className="container w-50">
      <SearchBar
        categorySearch={(searchCategory, stocked) =>
          categorySearch(searchCategory, stocked)
        }
      />
      {category ? (
        <ProductTable products={categoryProducts} category={category} />
      ) : (
        <Message />
      )}
    </div>
  );
}
