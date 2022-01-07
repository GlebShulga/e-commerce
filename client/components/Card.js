import React from 'react'
import { useDispatch } from 'react-redux'
import AddToBasket from './AddToBasket'
import { changeItemQuantityInBasket } from '../redux/reducers/basket'

const Card = ({ it, currentRate, currencyType, itemQuantityInBasket }) => {
  const dispatch = useDispatch()
  return (
    <article className="overflow-hidden rounded-lg shadow-lg">
      <img
        alt={it.title}
        className="block object-cover h-64 w-full"
        src={it.image}
        loading="lazy"
      />
      <header className="flex items-center justify-between leading-tight p-2 md:p-4">
        <h1 className="text-lg">
          <div className="no-underline hover:underline text-black">{it.title}</div>
        </h1>
      </header>
      <div className="container mx-auto flex justify-between p-5 flex-col md:flex-row items-center sm:px-2">
        <div>
          <span className="mx-1">{(it.price * currentRate).toFixed(2)}</span>
          <span>{currencyType}</span>
        </div>
        <div className="sm:px-2">
          {!itemQuantityInBasket && (
            <button
              id="cart button"
              type="button"
              className="flex ml-auto text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded focus-within:bg-gray-500"
              onClick={() => dispatch(changeItemQuantityInBasket(it.id, 1))}
            >
              Add to cart
            </button>
          )}
          {itemQuantityInBasket > 0 && (
            <AddToBasket itemQuantityInBasket={itemQuantityInBasket} it={it} />
          )}
        </div>
      </div>
    </article>
  )
}

export default Card
