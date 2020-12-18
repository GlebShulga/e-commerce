import axios from 'axios'
import { ADD_ID } from './basket'

const POST_LOG_BASKET = 'POST_LOG_BASKET'

const initialState = {
  logBasket: 0,
  list: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_LOG_BASKET: {
      return {
        ...state,
        logBasket: action.logBasket
      }
    }
    case ADD_ID: {
      const message = `${action.productTitle} was ${
        action.number > 0 ? 'added to the basket' : 'removed from basket'
      } ${+new Date()}`
      axios({
        method: 'post',
        url: '/api/v1/log',
        data: {
          log: message
        }
      })
      return {
        ...state,
        list: [...state.list, message]
      }
    }
    default:
      return state
  }
}
