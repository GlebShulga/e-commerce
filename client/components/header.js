import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useBeforeunload } from 'react-beforeunload'
import Currency from './currency'
import Sort from './sort'
import CartIcon from './cartIcon'

import { getGoods, getCurrency } from '../redux/reducers/goods'

const Header = () => {
  const basketState = useSelector((s) => s.basket.listOfIds)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getGoods())
  }, [dispatch])
  useEffect(() => {
    dispatch(getCurrency())
  }, [dispatch])
  return (
    <div lang="en" id="brand-name" className="text-center my-1 bg-gray-50">
      {useBeforeunload(() => localStorage.setItem('basketSaving', JSON.stringify(basketState)))}
      <div className="py-2">
        <Link to="/" className="font-bold text-4xl text-indigo-800">
          Gadsby Shop
        </Link>
      </div>
      <div className="container mx-auto flex justify-between flex-col md:flex-row items-center">
        <div className="flex flex-col items-center">
          <Currency />
          <Sort />
        </div>
        <div className="flex flex-col items-center">
          <CartIcon />
          <Link to="/log" className="font-bold text-sm py-3">
            log history
          </Link>
        </div>
      </div>
    </div>
  )
}

Header.propTypes = {}

export default Header
