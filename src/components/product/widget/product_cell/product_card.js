import React from 'react'

const ProductCard = ({ srcProduct, category = '', name = '' }) => {
  return <div className='product-card'>
    <div>
      <img src={srcProduct} alt={`this is a ${name}`} />
    </div>
    <div>
      <h3>{category}</h3>
      <h3>{name}</h3>
    </div>
  </div>
}

export default ProductCard