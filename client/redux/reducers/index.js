import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import goods from './goods'
import basket from './basket'
import log from './log'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    goods,
    basket,
    log
  })

export default createRootReducer
