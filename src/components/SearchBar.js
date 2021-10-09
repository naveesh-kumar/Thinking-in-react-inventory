import React from "react";

function SearchBar({ categorySearch }) {
  const changeHandler = (e) => {
    e.preventDefault();

    let searchObj={
      value:e.target[0].value,
      stocked:e.target[1].checked
    }

    categorySearch(searchObj.value, searchObj.stocked);
  };

  return (
    <div className="p-3">
      <form onSubmit={changeHandler}>
        <select name="select" className="form-select my-2" required>
          <option value="">Select the category</option>
          <option value="Sporting Goods">Sporting Goods</option>
          <option value="Electronics">Electronics</option>
          <option value="All Products">All Products</option>
        </select>
        <input
          name="checkbox"
          className="form-check-input my-2"
          type="checkbox"
          id="flexCheckDefault"
        />
        <label className="form-check-label" hreffor="flexCheckDefault">
           Only show products in stock
        </label>
        <button className="btn btn-secondary btn-sm d-block">Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
