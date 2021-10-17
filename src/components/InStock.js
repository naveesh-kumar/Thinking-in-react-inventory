import React from "react";

function InStock({ setStock }) {
  return (
    <div className="mb-5 mt-2">
      <input
        className="form-check-input"
        type="checkbox"
        onClick={(e) => setStock(e.target.checked)}
      />
      <label className="form-check-label">Only show products in stock</label>
    </div>
  );
}

export default InStock;
