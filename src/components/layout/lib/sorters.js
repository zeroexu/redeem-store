import { SETTINGS } from '../../../utils/constants'
const { STORE_CASES } = require('../../../utils/constants')

const setCurrentSort = (dispatch, sortType) => {
  return dispatch({
    type: STORE_CASES.SET_SORT,
    response: sortType
  })
}

const getNumberPages = (productsSize) => {
  let offset = 0
  if (productsSize > 0) {
    offset = Math.round(productsSize / SETTINGS.MAX_ITEMS_BY_PAGE)
  }
  return offset
}



export {
  setCurrentSort, getNumberPages
}