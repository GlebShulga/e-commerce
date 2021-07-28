/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import Head from './Head'
import Header from './Header'
import AddToBasket from './AddToBasket'
import checkoutIcon from '../assets/images/checkoutIcon.svg'

const Basket = () => {
  const { list: listOfGoods, currentRate, currency: currencyType } = useSelector((s) => s.goods)
  const basket = useSelector((s) => s.basket.listOfIds)
  const basketElement = basket.map((it) => it.id)
  const goodsInBasket = useMemo(
    () => listOfGoods.filter((it) => basketElement.indexOf(it.id) !== -1),
    [listOfGoods, basketElement]
  )
  const basketTotalPrice = useMemo(
    () =>
      basket.reduce((acc, rec) => {
        const productPrice =
          (goodsInBasket.find((item) => item.id === rec.id)?.price || 0) * rec.quantity
        return acc + productPrice
      }, 0),
    [basket, goodsInBasket]
  )
  const CurrentRateTotalPrice = (basketTotalPrice * currentRate).toFixed(2)
  return (
    <div>
      <Head title="Basket" />
      <Header />
      <div className="border">
        <div key="basketTable" className="flex justify-center my-6">
          <div className="flex flex-col w-full text-gray-800 bg-gray-50 md:w-4/5 lg:w-4/5">
            <div className="flex-1 shadow-lg pin-r pin-y p-8">
              <table className="w-full text-sm lg:text-base" cellSpacing="0">
                <thead>
                  <tr className="h-12 uppercase">
                    <th className="hidden md:table-cell" />
                    <th className="text-left">Product</th>
                    <th className="lg:text-right text-left pl-5 lg:pl-0">
                      <span className="lg:hidden" title="Quantity">
                        Qtd
                      </span>
                      <span className="hidden lg:inline">Quantity</span>
                    </th>
                    <th className="hidden text-right md:table-cell">Unit price</th>
                    <th className="text-right">Total price</th>
                  </tr>
                </thead>
                {goodsInBasket.map((item) => {
                  const { quantity } = basket.find((it) => it.id === item.id)
                  return (
                    <tbody key={item.id}>
                      <tr>
                        <td className="hidden pb-4 md:table-cell">
                          <img
                            alt={item.title}
                            className="product__image block object-cover h-24 w-24"
                            src={item.image}
                          />
                        </td>
                        <td className="product__title mb-2 md:ml-4">{item.title}</td>
                        <td className="md:justify-end md:flex mt-6">
                          <AddToBasket basketCount={quantity} it={item} />
                        </td>
                        <td className="hidden text-right md:table-cell">
                          <span className="product__price mx-1 text-sm lg:text-base font-medium">
                            {(item.price * currentRate).toFixed(2)}
                          </span>
                          <span className="text-sm lg:text-base font-medium">{currencyType}</span>
                        </td>
                        <td className="text-right">
                          <span className="product__total_price mx-1 text-sm lg:text-base font-medium">
                            {(quantity * item.price * currentRate).toFixed(2)}
                          </span>
                          <span className="text-sm lg:text-base font-medium">{currencyType}</span>
                        </td>
                      </tr>
                    </tbody>
                  )
                })}
              </table>
              <div className="flex justify-between pt-4 border-b">
                <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                  Total
                </div>
                <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                  <span className="total-amount mx-1">{CurrentRateTotalPrice}</span>
                  <span>{currencyType}</span>
                </div>
              </div>
              <div className="grid justify-items-end">
                <button
                  type="button"
                  className="flex justify-center w-auto px-10 py-3 mt-6 font-medium text-white uppercase bg-gray-800 rounded-full shadow item-center hover:bg-gray-700 focus:shadow-outline focus:outline-none"
                >
                  <img src={checkoutIcon} className="w-8" alt="Checkout Icon" />
                  <span className="ml-2 mt-5px">Procceed to checkout</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Basket)
