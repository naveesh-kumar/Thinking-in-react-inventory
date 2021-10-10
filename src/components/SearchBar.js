import React from "react";

function SearchBar({ categorySearch, categoryBasedProducts }) {
  const changeHandler = (e) => {
    e.preventDefault();

    let searchObj = {
      value: e.target[0].value,
      stocked: e.target[1].checked,
    };

    categorySearch(searchObj.value, searchObj.stocked);
  };

  return (
    <div className="p-3 my-2">
      <form onSubmit={changeHandler}>
        <select className="form-select my-2" required>
          <option value="">Select the category</option>
          {Object.keys(categoryBasedProducts).map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
          <option value="All Products">All Products</option>
        </select>

        <input className="form-check-input my-2" type="checkbox" />
        <label className="form-check-label">Only show products in stock</label>
        <button className="btn btn-secondary btn-sm d-block">Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
