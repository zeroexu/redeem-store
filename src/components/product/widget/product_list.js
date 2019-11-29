import React, { useContext, useState } from 'react'
import { Context } from '../../../public_store/index'
import ProductCell from './product_cell'
import { getSubSegment, sortProducts } from '../lib/product'
const { getProducts } = require('../../../utils/index')

const Productlist = ({ currentPage }) => {
  const { store, dispatch } = useContext(Context)
  const [isRequesting, setIsRequesting] = useState(false)
  const products = (!store.products) ? [] : store.products
  const userPoints = (store.user && store.user.points) ? store.user.points : 0
  const sorted = sortProducts(products, store.currentSorting)
  const subProducts = getSubSegment(currentPage, sorted)

  if (store.token && store.products.length === 0 && isRequesting === false) {
    setIsRequesting(true)
    getProducts(dispatch, store.token)
  }
  if (store.token && store.products.length > 0 && isRequesting === true) {
    setIsRequesting(false)
  }
  return <div id="products-container">
    {
      subProducts.map((product, index) => {
        return <ProductCell product={product} key={index} userPoints={userPoints} />
      })
    }
  </div>

}

export default Productlist
