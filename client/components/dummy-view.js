import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Head from './head'
import Header from './header'
import Card from './card'

import { getGoods, getCurrency } from '../redux/reducers/goods'

// Страница 1. Главная - '/'

//     Содержит в себе заголовок

//     Любой текст #brand-name при клике на который переходит на главную
//     Ссылка с полем #order-count(внутри которого находится количство товаров в корзине) - /basket
//     3 кнопки USD | EUR | CAD. Которые должны переключать валюту товаров
//     Кнопки сортировки товаров - по цене(#sort-price)(от большего к меньшему)- по названию(#sort-name)(алфавитный порядок).
//     Общая сумма всех товаров в корзине

const Dummy = () => {
  const dispatch = useDispatch()
  const listOfGoods = useSelector((s) => s.goods.list)
  const currentRate = useSelector((s) => s.goods.currentRate)
  const currencyType = useSelector((s) => s.goods.currency)

  useEffect(() => {
    dispatch(getGoods())
  }, [])
  useEffect(() => {
    dispatch(getCurrency())
  }, [])
  return (
    <div>
      <Head title="Hello" />
      <Header />
      <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          <div className="grid md:grid-cols-3 gap-8 m-5 max-w-5xl m-auto">
            {listOfGoods.map((it) => {
              return (
                <Card key={it.id} it={it} currentRate={currentRate} currencyType={currencyType} />
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
