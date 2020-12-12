import React from 'react'
import { useDispatch } from 'react-redux'

import { setCurrentRate } from '../redux/reducers/goods'

const Currency = () => {
  const dispatch = useDispatch()

  return (
    <div>
      <button type="button" onClick={() => dispatch(setCurrentRate('USD'))}>
        USD
      </button>
      <button type="button" onClick={() => dispatch(setCurrentRate('EUR'))}>
        EUR
      </button>
      <button type="button" onClick={() => dispatch(setCurrentRate('CAD'))}>
        CAD
      </button>
    </div>
  )
}

Currency.propTypes = {}

export default Currency