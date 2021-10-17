import React, { createContext, useState, useEffect } from "react";
import request from "../services/request";

export const productCtx = createContext([]);

export function ProductContext(props) {
  const [products, setProducts] = useState([]);
  const { handleGetRequest } = request();

  useEffect(() => {
    async function fetchData() {
      const latestProducts = await handleGetRequest();
      if (latestProducts) {
        setProducts(latestProducts);
      }
    }
   fetchData();
  }, []);

  return (
    <productCtx.Provider value={{ products, setProducts }}>
      {props.children}
    </productCtx.Provider>
  );
}
