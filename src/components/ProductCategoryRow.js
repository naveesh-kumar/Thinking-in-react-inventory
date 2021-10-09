import React from "react";

function ProductCategoryRow({ category, length }) {
  return (
    <div>
      <p className="fw-bold text-center mt-3">
        {category}
        <span className="badge bg-secondary">{length}</span>
      </p>
    </div>
  );
}

export default ProductCategoryRow;
