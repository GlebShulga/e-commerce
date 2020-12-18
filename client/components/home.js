import React, { useState } from 'react'
import Head from './head'
// import wave from '../assets/images/wave.jpg'

const Home = () => {
  const [counter, setCounterNew] = useState(0)

  return (
    <div>
      <Head title="Hello" />
      <img alt="wave" src="images/wave.jpg" />
      <button type="button" onClick={() => setCounterNew(counter + 1)}>
        updateCounter
      </button>
      <div> Hello World Dashboard {counter} </div>
    </div>
  )
}

Home.propTypes = {}

export default Home

// Страница 3. Логи - /logs
// Каждое действие юзера должно быть записано на сервере и выведено в таблице логов
// Варианты действий

// change currency from ${currency1} to ${currency2}
// add ${item-title} to the backet
// remove ${item-title} from the backet
// navigate to ${url} page
// sort by ${title}
// time of action in utc format (+new Date())
// Если обновить страницу, то логи должны сохраниться.