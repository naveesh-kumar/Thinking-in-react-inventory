import React, { createContext, useState, useEffect } from "react";

export const productCtx = createContext([]);

export function ProductContext(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const products = await getProducts();
      setProducts(products);
    }
    fetchData();
  }, []);

  const getProducts = async () => {
    const products = await fetch("http://localhost:5000/products");
    const productsJson = await products.json();
    return productsJson;
  };

  return (
    <productCtx.Provider value={products}>{props.children}</productCtx.Provider>
  );
}
