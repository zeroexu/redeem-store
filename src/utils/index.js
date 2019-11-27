import axios from 'axios'
const { API, METHODS, STORE_CASES } = require('./constants')


const request = (url, token, method, data = {}) => {


  axios.defaults.headers.common = { 'Authorization': `Bearer ${token}` }

  if (method === METHODS.GET) {
    return axios.get(API.SERVER + url, data)
  } else {
    return axios.post(API.SERVER + url, data)
  }

}
const getUserInfo = async (dispatch, token) => {
  const userDataResponse = await request(API.GET.USER.URL, token, METHODS.GET)
  return dispatch({
    type: STORE_CASES.SET_USER_DATA,
    response: userDataResponse
  })
}

const getProducts = async (dispatch, token) => {
  const productsResponse = await request(API.GET.PRODUCTS.URL, token, METHODS.GET)
  return dispatch({
    type: STORE_CASES.SET_PRODUCT_DATA,
    response: productsResponse
  })
}

const getHistory = async (dispatch, token) => {
  const historyResponse = await request(API.GET.REDEEM_HISTORY.URL, token, METHODS.GET)
  return dispatch({
    type: STORE_CASES.SET_USER_DATA,
    response: historyResponse
  })
}

export {
  getUserInfo, getProducts, getHistory
}