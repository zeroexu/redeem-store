import React, { useContext } from 'react'
import { Context } from '../../../public_store/index'
import { SORTS } from '../../../utils/constants'
const { setCurrentSort } = require('../lib/sorters')

const getActiveClass = (currentSorting, sorting) => {
  return (currentSorting === sorting) ? 'active' : 'inactive'
}

const Sorter = () => {
  const { store, dispatch } = useContext(Context)
  return <div id="sorter">
    Sort by:
    <button className={getActiveClass(store.currentSorting, SORTS.RECENT)} onClick={() => { setCurrentSort(dispatch, SORTS.RECENT) }} >Most recent</button>
    <button className={getActiveClass(store.currentSorting, SORTS.ASC)} onClick={() => { setCurrentSort(dispatch, SORTS.ASC) }}>Lowest price</button>
    <button className={getActiveClass(store.currentSorting, SORTS.DESC)} onClick={() => { setCurrentSort(dispatch, SORTS.DESC) }}>Highestprice</button>
  </div>
}

export default Sorter