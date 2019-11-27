import React from 'react'
import srcBuyBlue from '../../../../assets/icons/buy-blue.svg'

const ProductCard = ({ srcProduct, category = '', name = '' }) => {
  return <div className='product-card'>
    <div className={'img-container'}>
      <img src={srcProduct} alt={`this is a ${name}`} />
    </div>
    <div className='buy-container'>
      <button className='buy-floater'>
        <img src={srcBuyBlue} alt='buy button' />
      </button>
    </div>
    <div className='data-container'>
      <h3>{category}</h3>
      <h3>{name}</h3>
    </div>
  </div>
}

export default ProductCard