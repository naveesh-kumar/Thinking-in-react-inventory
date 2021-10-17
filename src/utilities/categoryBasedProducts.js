function categoryBasedProducts(products) {
  const categoryBasedProductsList = () => {
    const categoryBasedProducts = products.reduce((acc, cv) => {
      acc[cv["category"]] = acc[cv["category"]] || [];
      acc[cv["category"]].push(cv);
      return acc;
    }, {});

    return categoryBasedProducts;
  };

  const inStockProducts = (categoryProducts) => {
    return (categoryProducts || products).filter(
      (product) => product.stocked == "true"
    );
  };

  const allProducts = (categoryProducts) => {
    return categoryProducts || products;
  };

  return { categoryBasedProductsList, inStockProducts, allProducts };
}

export default categoryBasedProducts;
