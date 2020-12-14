import axios from 'axios'

const GET_GOODS = 'GET_GOODS'
const GET_CURRENCY = 'GET_CURRENCY'
const SET_CURRENT_RATE = 'SET_CURRENT_RATE'

const initialState = {
  list: [],
  rates: {},
  currentRate: 1,
  currency: 'USD'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_GOODS: {
      const { list } = action
      return {
        ...state,
        list
      }
    }
    case GET_CURRENCY: {
      const { rates } = action
      return {
        ...state,
        rates
      }
    }
    case SET_CURRENT_RATE: {
      const { currency, symbol } = action.current
      return {
        ...state,
        currentRate: currency,
        currency: symbol
      }
    }
    default:
      return state
  }
}

export function getGoods() {
  return (dispatch) => {
    axios('/api/v1/data').then(({ data: list }) => dispatch({ type: GET_GOODS, list }))
  }
}

export function getCurrency() {
  return (dispatch) => {
    axios('/api/v1/rates').then(({ data: rates }) => dispatch({ type: GET_CURRENCY, rates }))
  }
}

export function setCurrentRate(currencyType) {
  return (dispatch, getState) => {
    const store = getState()
    const { rates } = store.goods
    dispatch({
      type: SET_CURRENT_RATE,
      current: { currency: rates[currencyType], symbol: currencyType }
    })
  }
}

export function sort(str) {
  return (dispatch, getState) => {
    const store = getState()
    const { list } = store.goods
    const typeOfSort = JSON.parse(str)
    const sortedList = [...list].sort((a, b) =>
        (typeOfSort.type === 'price' ? a.price - b.price : a.title.localeCompare(b.title)) *
        typeOfSort.order
    )
    dispatch({
      type: GET_GOODS,
      list: sortedList
    })
  }
}
