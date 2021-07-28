import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setCurrentRate } from '../redux/reducers/goods'

const Currency = () => {
  const dispatch = useDispatch()
  const currencyType = useSelector((s) => s.goods.currency)
  return (
    <div>
      <button
        tabIndex="0"
        type="button"
        className={
          currencyType === 'USD' ? 'pushedButtonCurrencyClassName' : 'buttonCurrencyClassName'
        }
        onClick={() => dispatch(setCurrentRate('USD'))}
      >
        USD
      </button>
      <button
        tabIndex="0"
        type="button"
        className={
          currencyType === 'EUR' ? 'pushedButtonCurrencyClassName' : 'buttonCurrencyClassName'
        }
        onClick={() => dispatch(setCurrentRate('EUR'))}
      >
        EUR
      </button>
      <button
        tabIndex="0"
        type="button"
        className={
          currencyType === 'CAD' ? 'pushedButtonCurrencyClassName' : 'buttonCurrencyClassName'
        }
        onClick={() => dispatch(setCurrentRate('CAD'))}
      >
        CAD
      </button>
    </div>
  )
}


export default Currency
