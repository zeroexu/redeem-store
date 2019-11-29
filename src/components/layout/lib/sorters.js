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

const getPrevPage = (currentPage = 0) => {
  const prevPage = currentPage - 1
  if (prevPage < 0) {
    return 0
  } else {
    return prevPage
  }
}


const getNextpage = (currentPage = 0, productsSize = 0) => {
  const nextPage = currentPage + 1
  const numberOfPages = getNumberPages(productsSize)
  if (nextPage > numberOfPages) {
    return numberOfPages
  } else {
    return nextPage
  }
}

const showPrevButton = (currentPage = 0) => {
  const prevPage = currentPage - 1
  if (prevPage <= 0) {
    return false
  } else {
    return true
  }
}

const showNextButton = (currentPage, productsSize) => {
  const numberOfPages = getNumberPages(productsSize)
  const nextPage = currentPage + 1
  if (nextPage > numberOfPages) {
    return false
  } else {
    return true
  }
}

export {
  setCurrentSort, getNumberPages, getPrevPage, getNextpage, showNextButton, showPrevButton
}