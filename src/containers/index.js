import React, { useReducer } from 'react'
import { Context, initialState, reducer } from '../public_store/index'
import LayoutList from '../components/layout/widget/layout_list'
import ProductList from '../components/product/widget/product_list'

const Index = () => {
  const [store, dispatch] = useReducer(reducer, initialState)
  return <Context.Provider value={{ store, dispatch }}>
    <LayoutList >
      <ProductList />
    </LayoutList>
  </Context.Provider>
}

export default Index



