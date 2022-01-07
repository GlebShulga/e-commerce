import React from 'react'
import { useSelector } from 'react-redux'
import Head from './Head'
import Header from './Header'
import Card from './Card'
import ScrollArrow from './ScrollArrow'

const MainPage = () => {
  const { listOfGoods, currentRate, currency: currencyType } = useSelector((s) => s.goods)
  const basketItemsDictionary = useSelector((s) => s.basket.basketItemsDictionary)
  return (
    <div>
      <Head title="AB Shop" />
      <div className="sticky top-0 w-screen">
        <Header />
      </div>
      <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          <div className="grid md:grid-cols-3 gap-8 m-5 max-w-5xl m-auto">
            {listOfGoods.map((it) => {
              const itemQuantityInBasket = basketItemsDictionary[it.id]?.quantity
              return (
                <Card
                  key={it.id}
                  it={it}
                  currentRate={currentRate}
                  currencyType={currencyType}
                  itemQuantityInBasket={itemQuantityInBasket}
                />
              )
            })}
          </div>
          <ScrollArrow />
        </div>
      </div>
    </div>
  )
}

export default React.memo(MainPage)
