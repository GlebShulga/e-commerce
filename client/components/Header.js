import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useBeforeunload } from 'react-beforeunload'
import Currency from './Currency'
import Sort from './Sort'
import CartIcon from './CartIcon'
import logo from '../assets/images/logo.svg'

import { getGoods, getCurrency } from '../redux/reducers/goods'

const Header = () => {
  const basketState = useSelector((s) => s.basket.basketItemsDictionary)
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
      <div className="container mx-auto flex justify-around items-center flex-col md:flex-row items-center">
        <div className="flex flex-col items-center pt-2">
          <Currency />
          <Sort />
        </div>
        <Link to="/" className="flex justify-center hidden md:flex">
          <div className="grid col-1 text-blue-600 font-bold">
            <img src={logo} className="h-12 w-12" alt="Shop logo" />
            Shop
          </div>
        </Link>
        <div className="flex flex-col items-center">
          <CartIcon />
          <Link to="/log" tabIndex="-1" className="font-bold text-sm pb-3 invisible">
            log history
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
