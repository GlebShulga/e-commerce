/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react'
import { useSelector } from 'react-redux'
import AddToBasket from './AddToBasket'

const ItemInBasket = ({ item }) => {
  const { currentRate, currency: currencyType } = useSelector((s) => s.goods)
  const { title, quantity, image, price } = item
  return (
    <tr>
      <td className="hidden pb-4 md:table-cell">
        <img alt={title} className="product__image block object-cover h-24 w-24" src={image} />
      </td>
      <td className="product__title mb-2 md:ml-4">{title}</td>
      <td className="md:justify-end md:flex mt-6">
        <AddToBasket itemQuantityInBasket={quantity} it={item} />
      </td>
      <td className="hidden text-right md:table-cell">
        <span className="product__price mx-1 text-sm lg:text-base font-medium">
          {(price * currentRate).toFixed(2)}
        </span>
        <span className="text-sm lg:text-base font-medium">{currencyType}</span>
      </td>
      <td className="text-right">
        <span className="product__total_price mx-1 text-sm lg:text-base font-medium">
          {(quantity * price * currentRate).toFixed(2)}
        </span>
        <span className="text-sm lg:text-base font-medium">{currencyType}</span>
      </td>
    </tr>
  )
}

export default ItemInBasket
