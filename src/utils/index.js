import axios from 'axios'
const { API, METHODS, STORE_CASES } = require('./constants')


const request = (url, token, method, data = {}) => {

  var config = {
    headers: { 'Authorization': "bearer " + token }
  }

  if (method === METHODS.GET) {
    return axios.get(url, data, config)
  } else {
    return axios.post(url, data, config)
  }

}
const getUserInfo = async (dispatch, token) => {
  const userDataResponse = request(API.GET.USER.URL, token, METHODS.GET)
  return dispatch({
    type: STORE_CASES.SET_USER_DATA,
    response: userDataResponse
  })
}

const getProducts = async (dispatch, token) => {
  const productsResponse = request(API.GET.PRODUCTS.URL, token, METHODS.GET)
  return dispatch({
    type: STORE_CASES.SET_USER_DATA,
    response: productsResponse
  })
}

const getHistory = async (dispatch, token) => {
  const historyResponse = request(API.GET.REDEEM_HISTORY.URL, token, METHODS.GET)
  return dispatch({
    type: STORE_CASES.SET_USER_DATA,
    response: historyResponse
  })
}

module.export = {
  getUserInfo, getProducts, getHistory
}