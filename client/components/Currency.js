import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setCurrentRate } from '../redux/reducers/goods'

const Currency = () => {
  const dispatch = useDispatch()
  const currencyType = useSelector((s) => s.goods.currency)
  const currencyList = ['USD', 'EUR', 'CAD']

  return (
    <div>
      {currencyList.map((currency) => {
        return (
          <button
            key={currency}
            tabIndex="0"
            type="button"
            className={
              currencyType === currency
                ? 'pushedButtonCurrencyClassName'
                : 'buttonCurrencyClassName'
            }
            onClick={() => dispatch(setCurrentRate(currency))}
          >
            {currency}
          </button>
        )
      })}
    </div>
  )
}

export default Currency
