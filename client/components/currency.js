import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setCurrentRate } from '../redux/reducers/goods'

const Currency = () => {
  const dispatch = useDispatch()
  const currencyType = useSelector((s) => s.goods.currency)
  const buttonClassName =
    'border border-blue-500 text-blue-500 rounded-md px-4 py-2 mx-2 transition duration-500 ease select-none hover:text-white hover:bg-blue-600 focus:outline-none focus:shadow-outline'
  const pushedButtonClassName = 'text-white bg-blue-600 shadow-outline rounded-md px-4 py-2 mx-2'
  return (
    <div>
      <button
        type="button"
        className={currencyType === 'USD' ? pushedButtonClassName : buttonClassName}
        onClick={() => dispatch(setCurrentRate('USD'))}
      >
        USD
      </button>
      <button
        type="button"
        className={currencyType === 'EUR' ? pushedButtonClassName : buttonClassName}
        onClick={() => dispatch(setCurrentRate('EUR'))}
      >
        EUR
      </button>
      <button
        type="button"
        className={currencyType === 'CAD' ? pushedButtonClassName : buttonClassName}
        onClick={() => dispatch(setCurrentRate('CAD'))}
      >
        CAD
      </button>
    </div>
  )
}

Currency.propTypes = {}

export default Currency
