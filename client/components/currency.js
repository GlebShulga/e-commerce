import React from 'react'
import { useDispatch } from 'react-redux'

import { setCurrentRate } from '../redux/reducers/goods'

const Currency = () => {
  const dispatch = useDispatch()
  const buttonClassName =
    'border border-blue-500 text-blue-500 rounded-md px-4 py-2 mx-2 transition duration-500 ease select-none hover:text-white hover:bg-blue-600 focus:outline-none focus:shadow-outline'
  return (
    <div>
      <button
        type="button"
        className={buttonClassName}
        onClick={() => dispatch(setCurrentRate('USD'))}
      >
        USD
      </button>
      <button
        type="button"
        className={buttonClassName}
        onClick={() => dispatch(setCurrentRate('EUR'))}
      >
        EUR
      </button>
      <button
        type="button"
        className={buttonClassName}
        onClick={() => dispatch(setCurrentRate('CAD'))}
      >
        CAD
      </button>
    </div>
  )
}

Currency.propTypes = {}

export default Currency
