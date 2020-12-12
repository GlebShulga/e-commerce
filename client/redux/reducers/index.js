import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import goods from './goods'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    goods
  })

export default createRootReducer
