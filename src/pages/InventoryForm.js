import React, {useRef} from "react";

function InventoryForm({addProduct}) {
  const categoryInput = useRef("");
  const titleInput = useRef("");
  const priceInput = useRef("");
  const stock = useRef(true);

  const submitHandler=(e)=>{
    e.preventDefault();

    const product = {
      "category":categoryInput.current.value,
      "price":'$'+priceInput.current.value,
      "stocked":stock.current.value,
      "name":titleInput.current.value
    }

    addProduct(product);

  }

  return (
    <div className="container w-50 my-2">
      <h6 className="my-5 text-center">Add Inventory</h6>
      <form onSubmit={submitHandler}>
        <div className="row g-3 align-items-center">
          <div className="col-3">
            <label htmlFor="category" className="col-form-label">
              Category
            </label>
          </div>
          <div className="col-9">
            <input type="text" id="category" className="form-control" ref={categoryInput} required/>
          </div>

          <div className="col-3">
            <label htmlFor="title" className="col-form-label">
              Product title
            </label>
          </div>
          <div className="col-9">
            <input type="text" id="title" className="form-control" ref={titleInput} required/>
          </div>

          <div className="col-3">
            <label htmlFor="price" className="col-form-label">
              Product price
            </label>
          </div>
          <div className="col-9">
            <input type="text" id="price" className="form-control" ref={priceInput} required/>
          </div>

          <div className="col-3">
            <label htmlFor="stock" className="col-form-label">
              Stock
            </label>
          </div>
          <div className="col-9">
            <select id="stock" className="form-select" ref={stock}>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
        </div>
        <div className="text-center mt-5">
          <button className="btn btn-sm btn-secondary">Add to Inventory</button>
        </div>
      </form>
    </div>
  );
}

export default InventoryForm;
