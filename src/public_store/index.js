import React from 'react'
const { STORE_CASES, SORTS } = require('../utils/constants')
export const initialState = {
  user: undefined,
  products: [],
  redeemHistory: [],
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGRkYjk4OWIwMWI5ZDAwNmM1MjllNDgiLCJpYXQiOjE1NzQ4MTIwNDF9.O3prCG46keu0x758k1o0jDJBTnGekOB_dH_1oufZQRQ',
  currentSorting: SORTS.RECENT
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
    case STORE_CASES.SET_SORT:
      if (action.response) {
        newstate = {
          currentSorting: action.response
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