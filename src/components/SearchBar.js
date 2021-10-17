import React from "react";

function SearchBar({ categoryList, setCategory }) {
  return (
    <div className="mt-5">
      <select
        className="form-select"
        required
        onChange={e=>setCategory(e.target.value)}
      >
        <option value="">Select the category</option>
        {categoryList.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
        <option value="All Products">All Products</option>
      </select>
    </div>
  );
}

export default SearchBar;
