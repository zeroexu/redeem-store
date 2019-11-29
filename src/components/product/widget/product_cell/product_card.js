import React from 'react'
import srcBuyBlue from '../../../../assets/icons/buy-blue.svg'
import srcCoin from '../../../../assets/icons/coin.svg'
import { isRedemableProduct, remainPoints } from '../../lib/product'

const ProductCard = ({ srcProduct, category = '', name = '', userPoints = 0, price = 0 }) => {
  const isRedemable = isRedemableProduct(userPoints, price)
  const shaker = isRedemable ? '' : 'shaker'
  return <div className='product-card '>
    <div className={'img-container'}>
      <img src={srcProduct} alt={`this is a ${name}`} className={shaker} />
    </div>
    {checkIfIsRedeemable(userPoints, price)}
    <div className='data-container'>
      <h3>{category}</h3>
      <h3>{name}</h3>
    </div>
  </div>
}


const checkIfIsRedeemable = (userPoints = 0, price = 0) => {
  const isRedemable = isRedemableProduct(userPoints, price)

  if (isRedemable) {
    return <div className={'buy-container '}>
      <button className='buy-floater'>
        <img src={srcBuyBlue} alt='buy button' />
      </button>
    </div>
  }

  return <div className='remaining-points'>
    <button>
      <img src={srcCoin} alt='coin' />
      <h6>You need {-1 * remainPoints(userPoints, price)}</h6>
    </button>
  </div>

}

export default ProductCard