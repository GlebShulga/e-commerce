/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react'
import { useSelector } from 'react-redux'
import Head from './head'
import Header from './header'
import AddToBasket from './addToBasket'

const Basket = () => {
  const { list: listOfGoods, currentRate, currency: currencyType } = useSelector((s) => s.goods)
  const basket = useSelector((s) => s.basket.listOfIds)
  const basketId = basket.map((it) => it.id)
  const goodsInBasket = listOfGoods.filter((it) => basketId.indexOf(it.id) !== -1)
  const basketTotalPrice = basket.reduce((acc, rec) => {
    const productPrice =
      (goodsInBasket.find((item) => item.id === rec.id)?.price || 0) * rec.quantity
    return acc + productPrice
  }, 0)
  const CurrentRateTotalPrice = (basketTotalPrice * currentRate).toFixed(2)
  return (
    <div>
      <Head title="Basket" />
      <Header />
      <div className="border">
        <div key="basketTable" className="flex justify-center my-6">
          <div className="flex flex-col w-full text-gray-800 bg-gray-50 md:w-4/5 lg:w-4/5">
            {/* <div className="text-3xl font-semibold px-2">Basket</div> */}
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
                  <svg
                    aria-hidden="true"
                    data-prefix="far"
                    data-icon="credit-card"
                    className="w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"
                    />
                  </svg>
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

Basket.propTypes = {}

export default React.memo(Basket)
