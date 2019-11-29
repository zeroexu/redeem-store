import React, { useReducer } from 'react'
import { Context, initialState, reducer } from '../public_store/index'
import LayoutList from '../components/layout/widget/layout_list'
import ProductList from '../components/product/widget/product_list'

const Index = ({ match }) => {
  const [store, dispatch] = useReducer(reducer, initialState)

  const { params } = match
  const currentPage = (params.currentPage) ? parseInt(params.currentPage) : 0

  return <Context.Provider value={{ store, dispatch }}>
    <LayoutList currentPage={currentPage}>
      <ProductList currentPage={currentPage} />
    </LayoutList>
  </Context.Provider>
}

export default Index



