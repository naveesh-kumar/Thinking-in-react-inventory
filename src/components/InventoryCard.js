import React, { useRef } from "react";

function InventoryCard({
  product,
  setTitle,
  setPrice,
  setStock,
  onUpdateChangesClick,
}) {
  const titleInputRef = useRef();
  const priceInputRef = useRef();
  const stockInputRef = useRef();

  const onEditButtonClick = () => {
    titleInputRef.current.disabled = false;
    priceInputRef.current.disabled = false;
    stockInputRef.current.disabled = false;
  };

  return (
    <div className="m-3">
      <div className="card text-center" style={{ width: "250px" }}>
        <div className="card-body">
          <h5 className="card-title">{product.category}</h5>
        </div>
        <ul className="list-group">
          <li className="list-group-item">Product title</li>
          <input
            type="text"
            className="form-control"
            disabled
            defaultValue={product.name}
            ref={titleInputRef}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <li className="list-group-item">Product price</li>
          <input
            type="text"
            className="form-control"
            disabled
            defaultValue={product.price}
            ref={priceInputRef}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
          <li className="list-group-item">Stock</li>
          <select
            className="form-select"
            defaultValue={product.stocked}
            disabled
            ref={stockInputRef}
            onChange={(e) => {
              setStock(e.target.value);
            }}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </ul>
        <div className="card-body d-flex justify-content-evenly">
          <button className="btn btn-sm btn-dark" onClick={onEditButtonClick}>
            Edit
          </button>
          <button
            className="btn btn-sm btn-secondary"
            onClick={() => {
              onUpdateChangesClick(product);
            }}
          >
            Update Changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default InventoryCard;
