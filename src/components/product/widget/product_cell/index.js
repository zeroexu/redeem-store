import React from 'react'
import RemainIndicator from './remain_indicator'
import InnerModalCard from './inner_modal_card'
import ProductCard from './product_card'
const { hasEnoughPoints, remainPoints } = require('../../lib/product_cell')
const myPoints = 0

const ProductCell = ({ product }) => {
  const { price, id, points, name, srcProduct } = product
  const isShopable = hasEnoughPoints(myPoints, points)
  const remain = remainPoints(myPoints, points)

  return <div>
    {isShopable &&
      <div className='shoppable-bag' ></div>
    }

    {!isShopable &&
      <RemainIndicator price={remain} />
    }

    <InnerModalCard price={price} id={id} />
    <ProductCard price={price} srcProduct={srcProduct} name={name} />
  </div >
}

export default ProductCell