import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

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
        <svg
          className="h-7 w-12"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </div>
  )
}

CartIcon.propTypes = {}

export default CartIcon
