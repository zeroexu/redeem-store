import React, { useContext } from 'react'
import { Context } from '../../../public_store/index'
import { getNumberPages } from '../lib/sorters'

const CounterItems = ({ currentPage = 0 }) => {
  const { store } = useContext(Context)
  let offset = getNumberPages(store.products.length)
  return <div id='counter-list'>{currentPage} of {offset}</div>
}

export default CounterItems