import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Head from './head'
import Header from './header'

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

  useEffect(() => dispatch(getGoods(), []))
  useEffect(() => dispatch(getCurrency(), []))
  return (
    <div>
      <Head title="Hello" />
      <Header />
      <div>
        {listOfGoods.map((it) => {
          return (
            <div key={it.id}>
              <div>{it.title}</div>
              <div>{(it.price * currentRate).toFixed(2)}</div>
              <div>------------</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

Dummy.propTypes = {}

export default React.memo(Dummy)
