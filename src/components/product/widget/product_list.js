
import React, { useContext, useState } from 'react'
import { Context } from '../../../public_store/index'
import ProductCell from './product_cell'
const { getProducts } = require('../../../utils/index')

const Productlist = () => {
  const { store, dispatch } = useContext(Context)
  const [isRequesting, setIsRequesting] = useState(false)
  const products = []
  if (store.token && store.products.length === 0 && isRequesting === false) {
    setIsRequesting(true)
    getProducts(dispatch, store.token)
  }

  return products.map((product, index) => {
    return <li key={index}>
      <ProductCell product={product} />
    </li>
  })
}

export default Productlist
