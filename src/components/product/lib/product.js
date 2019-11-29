import { SETTINGS } from '../../../utils/constants'
const { SORTS } = require('../../../utils/constants')

const isRedemableProduct = (userPoints = 0, price = 0) => {
  return ((userPoints - price) < 0) ? false : true;
}

const remainPoints = (userPoints = 0, productPoints = 0) => {
  return (userPoints - productPoints)
}

const getSubSegment = (currentPage, products) => {
  const begin = (currentPage === 0) ? 0 : (currentPage - 1) * SETTINGS.MAX_ITEMS_BY_PAGE
  const end = (begin + SETTINGS.MAX_ITEMS_BY_PAGE > products.length) ? products.length : begin + SETTINGS.MAX_ITEMS_BY_PAGE
  const pageProducts = []
  for (let i = begin; i < end; i++) {
    if (products[i]) {
      pageProducts.push(products[i])
    }
  }
  return pageProducts
}

const sortProductByPriceAscending = (products = []) => {
  const copy = []
  for (let i = 0; i < products.length; i++) {
    copy[i] = products[i];
  }

  return copy.sort((a, b) => {
    return a.cost - b.cost
  })
}

const sortProductByPriceDescending = (products = []) => {
  return sortProductByPriceAscending(products).reverse()
}

const sortProducts = (products = [], currentSort) => {
  switch (currentSort) {
    case SORTS.RECENT:
      return products
    case SORTS.DESC:
      return sortProductByPriceDescending(products)
    case SORTS.ASC:
      return sortProductByPriceAscending(products)
    default:
      return products
  }
}

export {
  isRedemableProduct, remainPoints, getSubSegment, sortProducts
}
