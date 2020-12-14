import React from 'react'
import { useDispatch } from 'react-redux'
import { sort } from '../redux/reducers/goods'

const Sort = () => {
  const dispatch = useDispatch()
  const buttonClassName =
    'border border-gray-700 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-gray-800 focus:outline-none focus:shadow-outline'

  return (
    <div>
      <select onChange={(e) => dispatch(sort(e.target.value))} className={buttonClassName}>
        <option value={`{ "type": "price", "order": 1 }`}>Price ▲</option>
        <option value={`{ "type": "price", "order": -1 }`}>Price ▼</option>
        <option value={`{ "type": "title", "order": 1 }`}>Title ▲</option>
        <option value={`{ "type": "title", "order": -1 }`}>Title ▼</option>
      </select>
    </div>
  )
}

Sort.propTypes = {}

export default Sort
