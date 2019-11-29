import React, { useState } from 'react'
import RemainIndicator from './remain_indicator'
import InnerModalCard from './inner_modal_card'
import ProductCard from './product_card'
import { isRedemableProduct, remainPoints } from '../../lib/product'
const myPoints = 0

const ProductCell = ({ product, userPoints }) => {
  const [isHover, setIsHover] = useState(false)
  const { cost, id, points, name, img, category } = product
  const isShopable = isRedemableProduct(myPoints, points)
  const remain = remainPoints(myPoints, points) * -1

  return <div className='product-cell' onMouseOver={() => { setIsHover(true) }} onMouseOut={() => { setIsHover(false) }}>
    {isShopable &&
      <div className='shoppable-bag' ></div>
    }

    {!isShopable &&
      <RemainIndicator price={remain} />
    }

    <ProductCard price={cost} srcProduct={img.url} name={name} category={category} userPoints={userPoints} />
    <InnerModalCard price={cost} id={id} show={isHover && isRedemableProduct(userPoints, cost)} userPoints={userPoints} />

  </div >
}

export default ProductCell