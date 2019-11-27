import React from 'react'
const { STORE_CASES } = require('../utils/constants')
export const initialState = {
  user: undefined,
  products: [],
  redeemHistory: [],
  token: undefined,
  currentPage: 0
}

export const reducer = (state, action) => {
  let newstate = {}
  switch (action.type) {
    case STORE_CASES.RESET:
      newstate = initialState
      break
    case STORE_CASES.SET_USER_DATA:
      if (action.response) {
        newstate = {
          user: action.response.data
        }
      }
      break
    case STORE_CASES.SET_PRODUCT_DATA:
      if (action.response) {
        newstate = {
          products: action.response.data
        }
      }
      break
    case STORE_CASES.SET_HISTORY_DATA:
      if (action.response) {
        newstate = {
          redeemHistory: action.response.data
        }
      }
      break
    default:
      newstate = {}
  }
  const copyState = Object.assign({}, state)
  return Object.assign(copyState, newstate)
}

export const Context = React.createContext()