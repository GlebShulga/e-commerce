import React from 'react'
import { useDispatch } from 'react-redux'
import { sort } from '../redux/reducers/goods'

const Sort = () => {
  const dispatch = useDispatch()
  const sortButton =
    'border border-gray-700 bg-white block text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none focus:outline-none focus:shadow-outline'
  const sortHover = 'sortHover:text-white sortHover:bg-blue-400'

  return (
    <div>
      <select onChange={(e) => dispatch(sort(e.target.value))} className={sortButton}>
        <option disabled hidden>
          Sort by
        </option>
        <option className={sortHover} value={`{ "type": "price", "order": 1 }`}>
          Price ▲
        </option>
        <option className={sortHover} value={`{ "type": "price", "order": -1 }`}>
          Price ▼
        </option>
        <option className={sortHover} value={`{ "type": "title", "order": 1 }`}>
          Title ▲
        </option>
        <option className={sortHover} value={`{ "type": "title", "order": -1 }`}>
          Title ▼
        </option>
      </select>
    </div>
  )
}

Sort.propTypes = {}

export default Sort
