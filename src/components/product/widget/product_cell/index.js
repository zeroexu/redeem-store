import React, { useState } from 'react'
import RemainIndicator from './remain_indicator'
import InnerModalCard from './inner_modal_card'
import ProductCard from './product_card'
const { hasEnoughPoints, remainPoints } = require('../../lib/product_cell')
const myPoints = 0


const ProductCell = ({ product }) => {
  const [isHover, setIsHover] = useState(false)
  const { cost, id, points, name, img, category } = product
  const isShopable = hasEnoughPoints(myPoints, points)
  const remain = remainPoints(myPoints, points)

  return <div className='product-cell' onMouseOver={() => { setIsHover(true) }} onMouseOut={() => { setIsHover(false) }}>
    {isShopable &&
      <div className='shoppable-bag' ></div>
    }

    {!isShopable &&
      <RemainIndicator price={remain} />
    }

    <ProductCard price={cost} srcProduct={img.url} name={name} category={category} />
    <InnerModalCard price={cost} id={id} show={isHover} />

  </div >
}

export default ProductCell