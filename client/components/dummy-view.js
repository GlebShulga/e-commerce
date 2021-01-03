import React from 'react'
import { useSelector } from 'react-redux'
import Head from './head'
import Header from './header'
import Card from './card'

const Dummy = () => {
  const listOfGoods = useSelector((s) => s.goods.list)
  const currentRate = useSelector((s) => s.goods.currentRate)
  const currencyType = useSelector((s) => s.goods.currency)
  const basket = useSelector((s) => s.basket.listOfIds)
  return (
    <div>
      <Head title="Hello" />
      <Header />
      <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          <div className="grid md:grid-cols-3 gap-8 m-5 max-w-5xl m-auto">
            {listOfGoods.map((it) => {
              const basketCount = basket.find((itBas) => itBas.id === it.id)
              return (
                <Card
                  key={it.id}
                  it={it}
                  currentRate={currentRate}
                  currencyType={currencyType}
                  basketCount={basketCount?.quantity}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

Dummy.propTypes = {}

export default React.memo(Dummy)
