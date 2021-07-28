import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import cardIcon from '../assets/images/cardIcon.svg'

const CartIcon = () => {
  const totalBasket = useSelector((s) => s.basket.listOfIds)
  const totalBasketCount = totalBasket.reduce((acc, rec) => acc + rec.quantity, 0)
  return (
    <div className="flex items-center justify-center">
      <Link
        id="cartIcon"
        to="/basket"
        className="text-gray-600 hover:text-gray-500 focus:outline-none focus:text-gray-500 focus-within:bg-blue-200"
      >
        <span className="absolute rounded-full bg-indigo-600 text-white text-xs -mt-1 -mr-2 px-1">
          {totalBasketCount}
        </span>
        <img src={cardIcon} className="h-8 w-13" alt="Card Icon" />
      </Link>
    </div>
  )
}

export default CartIcon
