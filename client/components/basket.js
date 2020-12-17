import React from 'react'
import { useSelector } from 'react-redux'
import Head from './head'
import Header from './header'
import AddToBasket from './addToBasket'

const Basket = () => {
  const listOfGoods = useSelector((s) => s.goods.list)
  const basket = useSelector((s) => s.basket.listOfIds)
  const basketId = basket.map((it) => it.id)
  const goodsInBasket = listOfGoods.filter((it) => basketId.indexOf(it.id) !== -1)
  const currentRate = useSelector((s) => s.goods.currentRate)
  const basketTotalPrice = basket.reduce((acc, rec) => {
    const productPrice = goodsInBasket.find((item) => item.id === rec.id).price * rec.quantity
    return acc + productPrice
  }, 0)
  return (
    <div>
      <Head title="Basket" />
      <Header />
      <div className="border">
        <div className="border">Basket</div>
        {goodsInBasket.map((item) => {
          const { quantity } = basket.find((it) => it.id === item.id)
          return (
            <div key={item.id} className="border">
              <img
                alt={item.title}
                className="product__image block object-cover h-20 w-20"
                src={item.image}
              />
              <div className="product__title">{item.title}</div>
              <div className="product__price">{(item.price * currentRate).toFixed(2)}</div>
              <div>
                <AddToBasket basketCount={quantity} it={item} />
              </div>
              <div className="product__total_price">
                {(quantity * item.price * currentRate).toFixed(2)}
              </div>
            </div>
          )
        })}
        <div className="total-amount">{(basketTotalPrice * currentRate).toFixed(2)}</div>
      </div>
    </div>
  )
}

Basket.propTypes = {}

export default React.memo(Basket)
