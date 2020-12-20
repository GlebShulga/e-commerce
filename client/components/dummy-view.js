import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Head from './head'
import Header from './header'
import Card from './card'

import { getGoods, getCurrency } from '../redux/reducers/goods'
import { getLogs } from '../redux/reducers/log'

const Dummy = () => {
  const dispatch = useDispatch()
  const listOfGoods = useSelector((s) => s.goods.list)
  const currentRate = useSelector((s) => s.goods.currentRate)
  const currencyType = useSelector((s) => s.goods.currency)
  const basket = useSelector((s) => s.basket.listOfIds)

  useEffect(() => {
    dispatch(getGoods())
  }, [])
  useEffect(() => {
    dispatch(getCurrency())
  }, [])
  useEffect(() => {
    dispatch(getLogs())
  }, [])
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

