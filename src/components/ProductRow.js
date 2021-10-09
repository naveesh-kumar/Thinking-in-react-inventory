import React from 'react'

function ProductRow({name, price}) {
  return (
    <div className="d-flex justify-content-evenly my-3">
      <div>
        {name}
      </div>
      <div>
        {price}
      </div>
    </div>
  )
}

export default ProductRow
