import React from 'react'
import { useDispatch } from 'react-redux'
import { sort } from '../redux/reducers/goods'

const Sort = () => {
  const dispatch = useDispatch()

  return (
    <label htmlFor="sorting">
      <select
        name="sorting"
        id="sorting"
        onChange={(e) => dispatch(sort(e.target.value))}
        className="sortButton"
      >
        <option disabled hidden>
          Sort by
        </option>
        <option className="sortHover" value={`{ "type": "price", "order": 1 }`}>
          Price ▲
        </option>
        <option className="sortHover" value={`{ "type": "price", "order": -1 }`}>
          Price ▼
        </option>
        <option className="sortHover" value={`{ "type": "title", "order": 1 }`}>
          Title ▲
        </option>
        <option className="sortHover" value={`{ "type": "title", "order": -1 }`}>
          Title ▼
        </option>
      </select>
    </label>
  )
}

export default Sort
