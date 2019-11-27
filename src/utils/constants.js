module.exports = {
  ENVIROMENT: {

  },
  SETTINGS: {
    MAX_ITEMS_BY_PAGE: 32
  },
  METHODS: {
    GET: 'GET',
    POST: 'POST'
  },
  STORE_CASES: {
    RESET: 'reset',
    SET_USER_DATA: 'set_user_data',
    SET_PRODUCT_DATA: 'set_product_data',
    SET_HISTORY_DATA: 'set_history_data'
  },
  API: {
    SERVER: 'https://coding-challenge-api.aerolab.co/',
    GET: {
      USER: {
        URL: 'user/me'
      },
      REDEEM_HISTORY: {
        URL: 'user/history'
      },
      PRODUCTS: {
        URL: 'products'
      }
    },
    POST: {
      ADD_POINTS: {
        URL: 'user/points',
        PARAMS: {
          amount: 0
        }
      },
      ADD_REDEEM: {
        URL: 'redeem',
        PARAMS: {
          productId: undefined
        }
      },
    }
  }
}