
import React, { useContext, useState } from 'react'
import { Context } from '../../../public_store/index'
import ProductCell from './product_cell'
const { getProducts } = require('../../../utils/index')

const Productlist = () => {
  const { store, dispatch } = useContext(Context)
  const [isRequesting, setIsRequesting] = useState(false)
  const products = (!store.products) ? [] : store.products

  if (store.token && store.products.length === 0 && isRequesting === false) {
    setIsRequesting(true)
    getProducts(dispatch, store.token)
  }
  return <div id="products-container">
    {
      products.map((product, index) => {
        return <ProductCell product={product} key={index} />
      })
    }
  </div>

}

export default Productlist
