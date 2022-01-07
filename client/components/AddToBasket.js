import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { changeItemQuantityInBasket } from '../redux/reducers/basket'

const AddToBasket = ({ it, itemQuantityInBasket }) => {
  const dispatch = useDispatch()

  const onAdd = useCallback(() => {
    dispatch(changeItemQuantityInBasket(it.id, -1))
  }, [it.id])
  const onSubtract = useCallback(() => {
    dispatch(changeItemQuantityInBasket(it.id, 1))
  }, [it.id])

  return (
    <div className="flex flex-row border h-10 w-24 rounded-lg">
      <button
        type="button"
        className="addToBasketButton border-r bg-red-400 hover:bg-red-500 rounded-l focus-within:bg-red-900"
        onClick={onAdd}
      >
        <span className="m-auto">-</span>
      </button>
      <div className="product__amout bg-white w-24 text-xs md:text-base flex items-center justify-center cursor-default">
        {itemQuantityInBasket}
      </div>
      <button
        type="button"
        className="addToBasketButton border-l bg-blue-400 hover:bg-blue-500 rounded-r focus-within:bg-blue-900"
        onClick={onSubtract}
      >
        <span className="m-auto">+</span>
      </button>
    </div>
  )
}

export default AddToBasket
