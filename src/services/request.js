function request() {
  const handlePostRequest = async (options) => {
    const response = await fetch("http://localhost:5000/products", options);
    const status = response.ok;
    const newProduct = await response.json();
    return {newProduct, status};
  };

  const handlePutRequest = async (options, id) => {
    const response = await fetch(
      "http://localhost:5000/products/" + id,
      options
    );
    const status = response.ok;
    const updatedProduct = await response.json();
    return {updatedProduct, status};
  };

  const handleGetRequest = async () => {
    const response = await fetch("http://localhost:5000/products");
    const products = await response.json();
    return products;
  };

  const handleDeleteRequest = async (options, id) => {
    const response = await fetch(
      "http://localhost:5000/products/" + id,
      options
    );
    const productDeleteStatus = await response.ok;
    return productDeleteStatus;
  };

  return {
    handlePostRequest,
    handlePutRequest,
    handleGetRequest,
    handleDeleteRequest,
  };
}

export default request;
